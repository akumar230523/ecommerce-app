import express from "express";
import { getAllProduct, getProductById } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/", getAllProduct);
productRouter.get("/:id", getProductById);

export default productRouter;
