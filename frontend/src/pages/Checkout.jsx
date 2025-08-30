import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

import AuthContext from "../context/AuthContext";

import "../styles/Checkout.css";

const Checkout = () => {

    const {user} = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    // Fetch cart products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await api.get(`/carts/${user.userId}`, { 
                    headers: { Authorization: `Bearer ${token}` } 
                });
                setProducts(response.data);
            } 
            catch (error) {
                toast.error("Something wrong. Please sign in again.");
            } 
        };
        fetchProducts();
    }, []);

    // Calculate total amount of the cart
    const total = products.reduce((acc, pro) => acc + pro.price * pro.quantity, 0);

    // Handle place order action
    const placeOrder = () => {
        toast.success("Order placed successfully..");
    }

    return ( 
        <section className="checkout"> 
            <div className="co-summary"> 
                <h2> CheckOut </h2> 
                <hr /> 
                { products.length === 0 ? ( 
                    <p> No items in cart. </p> 
                ) : ( 
                    <ul> 
                        { products.map((product) => ( <li key={product.productId}> 
                            {product.title} x {product.quantity} 
                            <b> ${(product.price * product.quantity).toFixed(2)} </b> 
                        </li> )) }
                    </ul>
                ) }
                <h5> Total: ${(total).toFixed(2)} </h5>
                <button className="po-btn" onClick={placeOrder}> Place Order </button>
                <hr />
                <Link to='/cart' className="back-btn"> <i className="fa-solid fa-arrow-left"></i> Back </Link>
            </div>
        </section>
    );

};

export default Checkout;