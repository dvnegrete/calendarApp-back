import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_URI as string);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw new Error('Database connection failed');
    }
}