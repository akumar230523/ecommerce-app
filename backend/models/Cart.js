import mongoose from "mongoose";

const cartProductSchema = new mongoose.Schema({
    productId: { type: Number, required: true },
    title: { type: String, required: true },
    thumbnail: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 1 },
}, { _id: false });

const cartSchema = new mongoose.Schema({
    cartId: { type: String, required: true, unique: true },
    products: { type: [cartProductSchema], default: [] },
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;


