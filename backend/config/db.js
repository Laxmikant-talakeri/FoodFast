import mongoose from "mongoose";
const mongoURI = process.env.MONGO_URI;

export const connectDB=async()=>{
    await mongoose.connect('mongoURI').then(()=>console.log("DB connected"));
}