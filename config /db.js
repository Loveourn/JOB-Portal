import mongoose from "mongoose";
import colors from 'colors';
import dotenv from 'dotenv';


dotenv.config()


const connectDb = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connection to MongoDb Database ${mongoose.connection.host}`.bgCyan.white);
    } catch (error) {
        console.log(`MongoDB Erorr ${error}`.bgRed.white);
    }
}

export default connectDb;