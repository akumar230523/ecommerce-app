import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    rating: Number,
    comment: String,
    date: Date,
    reviewerName: String,
    reviewerEmail: String
}, { _id: false });

const metaSchema = new mongoose.Schema({
    barcode: String,
    qrCode: String
}, { _id: false });

const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    brand: String,
    category: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    availabilityStatus: String,
    description: String,
    warrantyInformation: String,
    shippingInformation: String,
    returnPolicy: String,
    meta: metaSchema,
    reviews: [reviewSchema],
    thumbnail: String,
});

const Product = mongoose.model("Product", productSchema);

export default Product;


