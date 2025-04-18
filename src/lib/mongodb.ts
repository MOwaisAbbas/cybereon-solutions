import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already connected!")
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "")
        connection.isConnected = db.connections[0].readyState

        console.log("DB Connected Successfuly!")
    } catch (error) {
        console.log("DB Connection failed : ", error)
        // process.exit(1)

    }
}

export default dbConnect;











// const MONGODB_URI = process.env.MONGODB_URI || '';

// if (!MONGODB_URI) {
//     throw new Error('MONGODB_URI environment variable is not defined');
// }

// // Simple connection wrapper without global caching
// export async function connectToDatabase() {
//     try {
//         if (mongoose.connection.readyState === 1) {
//             return mongoose;
//         }

//         await mongoose.connect(MONGODB_URI, {
//             serverSelectionTimeoutMS: 5000,
//             bufferCommands: false,
//         });

//         console.log('Database connected successfully');
//         return mongoose;
//     } catch (error) {
//         console.error('Database connection failed:', error);
//     }
// }