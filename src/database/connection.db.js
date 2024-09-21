import mongoose from "mongoose";

const connectDB = () => {
  console.log("wait connecting to the database");

  mongoose
    .connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 70000, 
      socketTimeoutMS: 60000, 
      connectTimeoutMS: 60000,
    })
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

export default connectDB;
