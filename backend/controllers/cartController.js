import Cart from "../models/Cart.js";

// Get all products from a cart
export const cartProducts = async (req, res) => {
    const cartId = req.params.cartId;
    try {
        const cart = await Cart.findOne({ cartId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found." });
        }
        return res.status(200).json(cart.products);
    } 
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to fetch cart products." });
    }
};

// Add a product to the cart
export const addProduct = async (req, res) => {
    const { cartId, productId, title, thumbnail, price, quantity } = req.body;
    try {
        const cart = await Cart.findOne({ cartId }); 
        const existingProduct = cart.products.find(product => product.productId == productId);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } 
        else {
            cart.products.push({ productId, title, thumbnail, price, quantity });
        }
        await cart.save();
        return res.status(200).json({ message: "Product added successfully." });
    } 
    catch (err) {
        console.error(err); 
        return res.status(500).json({ message: "Failed to add product." });
    } 
};

// Update product quantity in the cart
export const updateProduct = async (req, res) => {
    const { cartId, productId, action } = req.body;
    try {
        const cart = await Cart.findOne({ cartId });
        const product = cart.products.find(product => product.productId == productId);
        if (action == "increase") {
            product.quantity += 1;
        } 
        else if (action == "decrease") {
            product.quantity -= 1;
            if (product.quantity <= 0) {
                cart.products = cart.products.filter(product => product.productId != productId);
            }
        }
        await cart.save();
        return res.status(200).json({ message: "Cart updated successfully." });
    } 
    catch (err) {
        console.error(err); 
        return res.status(500).json({ message: "Failed to update cart." });
    }   
};

// Delete a product from the cart
export const deleteProduct = async (req, res) => {
    const { cartId, productId } = req.body;
    try {
        const cart = await Cart.findOne({ cartId });
        cart.products = cart.products.filter(product => product.productId != productId);
        await cart.save();
        return res.status(200).json({ message: "Product removed successfully." });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to remove product." });
    }
};


