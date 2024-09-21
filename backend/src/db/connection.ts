import { connect, disconnect } from "mongoose";
async function connectToDatabase(){
    try{
        await connect(process.env.MONGODB_URL);
    } catch(error){
        console.log(error);
        throw new Error("Unable to connect to the database");
    }
}

async function disconnectFromDatabase(){
    try{
        await disconnect();
    } catch (error){
        console.log(error);
        throw new Error("Disconnection from Database failed");
    }
}

export { connectToDatabase, disconnectFromDatabase };

// import { createConnection, disconnect } from "mongoose";

// async function connectToDatabase(): Promise<void> {
//     try {
//         await createConnection(process.env.MONGODB_URL);
//         console.log(`Connected to database`);
//     } catch (error) {
//         console.error(`Failed to connect to database`);
//         throw new Error("Unable to connect to the database");
//     }
// }

// async function disconnectFromDatabase(): Promise<void> {
//     try {
//         await disconnect();
//         console.log("Disconnected from database");
//     } catch (error) {
//         console.error("Disconnection from Database failed");
//         throw new Error("Disconnection from Database failed");
//     }
// }

// export { connectToDatabase, disconnectFromDatabase };

