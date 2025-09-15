import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

import AuthContext from "../context/AuthContext";

import "../styles/CartItem.css";

const CartItem = ({ product, onUpdate }) => {

    const { user } = useContext(AuthContext);

    // Update product quantity in cart
    const updateProduct = async (action) => {
        try {
            const token = localStorage.getItem("token");
            await api.put('/carts/update', {
                cartId: user.userId, productId: product.productId, action 
            }, {
                headers: { Authorization: `Bearer ${token}` } 
            });
            toast.success(`${action} quantity for ${product.title}.`);
            onUpdate();
        }
        catch (error) {
            toast.error(`Failed to ${action} quantity for ${product.title}.`);
        }
    };

    // Remove product from cart
    const removeProduct = async () => {
        try {
            const token = localStorage.getItem("token");
            await api.delete('/carts/delete', {
                data: { cartId: user.userId, productId: product.productId },
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.warn(`${product.title} removed from cart.`);
            onUpdate();
        } 
        catch (error) {
            toast.error(`Failed to remove "${product.title}" from cart.`);
        }
    };

    return (
        <article className="cart-item">
            <h4> {product.title} </h4>
            <Link to={`/product-detail/${product.productId}`}> <img src={product.thumbnail} alt={product.title} /> </Link>
            <div className="pq">
                <p> Price: ${product.price} x {product.quantity} </p>
                <p> ${(product.price * product.quantity).toFixed(2)} </p>
            </div>
            <div className="ur-btn">
                <button className="u-btn" onClick={() => updateProduct("decrease")}> <i className="fa-solid fa-minus"></i> </button>
                <b> {product.quantity} </b>
                <button className="u-btn" onClick={() => updateProduct("increase")}> <i className="fa-solid fa-plus"></i> </button>
                <button className="r-btn" onClick={removeProduct}> <i className="fa-solid fa-trash"></i> </button>
            </div>
        </article>
    );

};

export default CartItem;



