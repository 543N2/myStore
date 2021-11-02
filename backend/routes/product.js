import product from "../controllers/product.js";
import express from "express";

// Create router
const router = express.Router();

// Create routes
router.post("/registerProduct", product.registerProduct);

export default router;