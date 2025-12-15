import mongoose from "mongoose";

async function connectDb() {
  try {
    await mongoose.connect("mongodb://localhost:27017/ecommerce");
    console.log("DB connect succesfully");
  } catch (error) {
    console.log(error, "error while connect DB");
  }
}

export default connectDb;
