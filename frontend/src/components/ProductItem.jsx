import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

import AuthContext from "../context/AuthContext";

import "../styles/ProductItem.css";

const ProductItem = ({ product }) => {

    const { user } = useContext(AuthContext);

    // Adding product to cart.
    const addProduct = async () => { 
        if (!user) {
            toast.warn("Please sign in to add products to cart.");
            return;
        }
        
        try {
            const token = localStorage.getItem('token');
            await api.post('/carts/add', {
                cartId: user.userId, productId: product.id, title: product.title, thumbnail: product.thumbnail, price: product.price, quantity: 1 
            }, {
                headers: { Authorization: `Bearer ${token}` } 
            });
            toast.success(`${product.title} added to your cart.`);
        }
        catch (error) {
            toast.error(`Failed to add ${product.title} to cart.`);
        }
    };

    return (
        <article className="product-item">
            <h4> {product.title} </h4>
            <Link to={`/product-detail/${product.id}`}> <img src={product.thumbnail} alt={product.title} /> </Link>
            <div className="pr">
                <p> Price: ${product.price} </p>
                <p> {product.rating} <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i> </p>
            </div>
            <button className="add-btn" onClick={addProduct}> <i className="fa-solid fa-cart-shopping fa-sm"></i> Add to Cart </button>
        </article>
    );
    
};

export default ProductItem;

