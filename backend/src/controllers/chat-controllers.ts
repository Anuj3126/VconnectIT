import { ChromaClient, OpenAIEmbeddingFunction } from "chromadb";
import { NextFunction, Request, Response } from "express";
import OpenAI from "openai";
import User from "../models/User.js";


export const generateChatCompletion = async (req: Request, res: Response, next: NextFunction) => {
    const { message } = req.body;
    
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).json({ message: "User is not registered or Token malfunctioned" });
        }
        const openAIConversations = user.chats.map(({ role, content }) => ({
            role,
            content,
        })) as OpenAI.Chat.CreateChatCompletionRequestMessage[];
        //--------- chroma test ---------
        
        const client = new ChromaClient();
        const embedder = new OpenAIEmbeddingFunction({
        openai_api_key: process.env.OPEN_AI_SECRET,
        
        });
        const collection =  await client.getCollection({
            name: "testrules7",
            embeddingFunction: embedder,
        });
        const results =await collection.query({
            queryTexts: [message],
            nResults: 1,
        });
        console.log(results.documents[0][0]);

        const openaiMessage= "refer:\n "+results.documents[0][0]+" \nand answer the following question:\n"+message;

        //--------- chroma test ---------

        openAIConversations.push({ content: openaiMessage, role: "user" });
        user.chats.push({ content: message, role: "user" });
        
        const openai = new OpenAI({
        apiKey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPENAI_ORGANIZATION_ID,
        });
        // Send to OpenAI API
        const chatResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: openAIConversations,
        });
        // Update user chats with the AI response
        user.chats.push(chatResponse.choices[0].message);

        // Save user with updated chats
        await user.save();

        return res.status(200).json({ chats: user.chats });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};

export const sendChatsToUser = async (req:Request,res:Response,next:NextFunction)=>{
    //User Login
    try{
        const existingUser= await User.findById(res.locals.jwtData.id);
        if (!existingUser){
            return res.status(401).send("User not registered or Token malfunctioned");
        }
        if (existingUser._id.toString()!==res.locals.jwtData.id){
            return res.status(401).send("Authorization Failed!");
        }
        return res.status(200).json({message:"OK", chats: existingUser.chats });
    }
    catch(error){
        console.log(error);
        return res.status(200).json({message:"ERROR",cause:error.message});
    }
}

export const deleteChats = async (req:Request,res:Response,next:NextFunction)=>{
    //User Login
    try{
        const existingUser= await User.findById(res.locals.jwtData.id);
        if (!existingUser){
            return res.status(401).send("User not registered or Token malfunctioned");
        }
        if (existingUser._id.toString()!==res.locals.jwtData.id){
            return res.status(401).send("Authorization Failed!");
        }
        //@ts-ignore
        existingUser.chats=[];
        await existingUser.save();
        return res.status(200).json({message:"OK"});
    }
    catch(error){
        console.log(error);
        return res.status(200).json({message:"ERROR",cause:error.message});
    }
}