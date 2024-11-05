import express from "express";
import cors from "cors";
import https from "https";
import fs from "fs";
import { connectToDatabase, db } from "./config/db";

import * as dotenv from "dotenv";
import path from "path";
import router from "./routes/routes";

dotenv.config({ path: path.resolve(__dirname, "../..", ".env") });

const env = process.env.NODE_ENV ?? "development";

const app = express();

const initializeServer = (port: number): void => {
  const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  server.on("error", (error: any) => {
    console.log("Server error", error);
    if (error.code === "EADDRINUSE") {
      console.log("Port is already in use, retrying...");
    }
  });
  connectToDatabase();
};

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(router);

export default initializeServer;
