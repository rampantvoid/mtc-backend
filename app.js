import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// create a express application
const app = express();

// setup cors middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// setup express middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// setup cookie parser middleware
app.use(cookieParser());

export { app };
