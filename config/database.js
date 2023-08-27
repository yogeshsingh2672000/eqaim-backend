import mongoose from "mongoose";

const mongoURI = "mongodb://127.0.0.1:27017/eqaim";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo");
  } catch (error) {
    console.error("Error connecting to Mongo:", error);
  }
};

export default connectToMongo;
