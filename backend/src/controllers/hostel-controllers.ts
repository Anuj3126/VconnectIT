import { Request, Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Fix for ES Modules: __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to your JSON file
const filePath = path.join(__dirname, '../content/hostelData.json');

// Read the JSON data from the file and parse it
let jsonData: any[] = [];
try {
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    jsonData = JSON.parse(fileContents);
    
    // Debugging: Log jsonData to see its structure
    console.log("Parsed JSON Data: ", JSON.stringify(jsonData, null, 2));
} catch (error) {
    console.error("Error reading or parsing JSON file:", error.message);
    jsonData = []; // Ensure jsonData is defined to avoid further issues
}

// Controller function
export const getHostelByIndex = async (req: Request, res: Response) => {
    const index = parseInt(req.query.index as string);
    console.log("Hello, we have a connection");
    console.log("Requested index:", index);

    if (isNaN(index)) {
        return res.status(400).send("Invalid index");
    }

    try {
        // Ensure jsonData is an array
        if (!Array.isArray(jsonData)) {
            console.error("jsonData is not an array. Check JSON structure.");
            return res.status(500).send("Internal Server Error");
        }

        // Find the hostel object with the matching index in the JSON data
        const result = jsonData.find((hostel) => hostel.index === index);

        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(404).send("Data not found");
        }
    } catch (err) {
        console.error("Error fetching data from JSON file:", err.message);
        return res.status(500).send("Error fetching data from JSON file");
    }
};