// ...existing code...
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MONGO_URI not set in environment");
    try {
        await mongoose.connect(uri); // remove legacy options
        console.log("the database is connected");
    } catch (error) {
        console.error("Database connection error:", error.message);
        process.exit(1);
    }
}
// ...existing code...