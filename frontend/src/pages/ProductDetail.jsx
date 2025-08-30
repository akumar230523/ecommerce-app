import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

import "../styles/ProductDetail.css";

function ProductDetail() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get(`/products/${id}`);
                setProduct(response.data);
            } 
            catch (error) {
                toast.error(error.response?.data?.message || "Failed to fetch product..");
            }
        };
        fetchProducts();
    }, []);

    return (
        <section className="product-detail">
            {/* Product Data */}
            <div className="product-data">
                <div className="product-if">     {/* Product Image and Title */}
                    <img src={product.thumbnail} alt={product.title} />
                    <figcaption> {product.title} </figcaption>
                </div>
                <div className="product-info">     {/* Product Information */}
                    <p> <b> Brand: </b> <i> {product.brand} </i> </p>
                    <p> <b> Price: </b> ${product.price} </p>
                    <p> <b> Discount: </b> {product.discountPercentage || 'N/A'}% </p>
                    <p> <b> Rating: </b> {product.rating} <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i> </p>
                    <p> <b> Availability: </b> {product.availabilityStatus || 'N/A'} </p>
                    <p> <b> Stock: </b> {product.stock || 'N/A'} </p>                
                    <p> <b> Description: </b> <i> {product.description} </i> </p>
                    <p> <b> Warranty: </b> {product.warrantyInformation || 'No warranty'} </p>
                    <p> <b> Shipping Info: </b> {product.shippingInformation || 'N/A'} </p>
                    <p> <b> Return Policy: </b> {product.returnPolicy || 'No Return'} </p>
                </div>
            </div>
            {/* Product Code */}
            <div className="product-code">
                { product.meta?.qrCode && ( <img src={product.meta.qrCode} alt="QR Code" width="100" /> ) }
                <p> <i> Code: </i> {product.meta?.barcode || 'N/A'} </p>
            </div>
            {/* Customer Reviews */}
            { product.reviews?.length > 0 && (
                <section className="reviews">
                    <h3> Customer Reviews </h3>
                    { product.reviews.map((review, index) => (
                        <div className="review-data" key={index}>
                            <p> {review.rating} <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i> - <i> {review.comment} </i> </p>
                            <p> <b> {review.reviewerName} </b> <small> {review.reviewerEmail} </small> </p>
                            <p> {new Date(review.date).toLocaleDateString()} </p>
                        </div>
                    )) }
                </section>
            ) }
            {/* Back Button */}
            <Link to='/' className="back-btn"> <i className="fa-solid fa-arrow-left"></i> Back Home </Link>
            {/*  */}
        </section>
    );

};

export default ProductDetail;

