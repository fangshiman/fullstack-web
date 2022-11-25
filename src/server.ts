import dotenv from "dotenv";
import http from "http";
dotenv.config({ path: './config/config.env' });
import connectDB from "../config/db";
import app from "./app";

connectDB();

const PORT = process.env.PORT || 5001; // 5000 is probably already taken in mac M1

const server = http.createServer(app);

server.listen(PORT, ()=>console.log(`Server running in ${process.env.NODE_ENV}`));
  