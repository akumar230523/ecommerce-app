import express from "express";
import { cartProducts, addProduct, updateProduct, deleteProduct } from "../controllers/cartController.js";
import auth from "../middleware/authMiddleware.js";

const cartRouter = express.Router();

cartRouter.get("/:cartId", auth, cartProducts);
cartRouter.post("/add", auth, addProduct);
cartRouter.put("/update", auth, updateProduct);
cartRouter.delete("/delete", auth, deleteProduct);

export default cartRouter;


