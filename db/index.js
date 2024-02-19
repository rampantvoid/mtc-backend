import mongoose from "mongoose";
import { MONGO_DB } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionString = await mongoose.connect(
      `${process.env.MONGO_URI}/${MONGO_DB}`
    );

    console.log(
      `\n[+] MongoDB connected !! DB HOST: ${connectionString.connection.host}`
    );
  } catch (err) {
    console.log("[-] ERROR: " + err);
    process.exit(1);
  }
};

export default connectDB;
