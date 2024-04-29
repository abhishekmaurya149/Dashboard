import mongoose from "mongoose";

const URL = process.env.DATABASE;
const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log("DB Connected");        
    } catch (error) {
        console.log("DB Disconnected");
        
    }
};

export default connectDB;