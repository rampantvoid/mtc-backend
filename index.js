import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config();

const port = process.env.PORT || 8000;

// connect to the database
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("[+] Server listening on port: " + port);
    });
  })
  .catch((err) => {
    console.log("[-] MongoDB error: " + err);
  });
