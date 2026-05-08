import mongoose from "mongoose";

async function connectDB() {
    try {
       const connectionInstance =  await mongoose.connect(process.env.MONGODB_URL);
       console.log("mongodb connected successfully", connectionInstance.connection.host);
    //    console.log("connection instance: ", connectionInstance);
    }
    catch (err) {
        console.log("mongodb connection error: ", err);
        process.exit(1);
    }   
}

export default connectDB;