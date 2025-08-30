import Product from "../models/Product.js";

// Get all products
export const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch products." });
    }
};

// Get product by id
export const getProductById = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findOne({ id });
        if (!product) {
            return res.status(404).json({message: "Product not found."});
        }
        res.status(200).json(product);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch product." });
    }
};
