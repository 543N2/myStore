import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./db/db.js";
import product from "./routes/product.js";

dotenv.config();

// Create & configure server
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/product", product);
app.listen(process.env.PORT, () => console.log("Backend running on port: " + process.env.PORT));

// Connect to database
db.dbConnection();
