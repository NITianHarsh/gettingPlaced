import mongoose from "mongoose";

async function dbConnection() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
    mongoose.set("strictPopulate", false);
  } catch (error) {
    console.log("DB not connected  --> ", error);
  }
}

export default dbConnection;
