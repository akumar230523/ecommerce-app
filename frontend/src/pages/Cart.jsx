import {useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

import AuthContext from "../context/AuthContext";
import CartItem from "../components/CartItem";

import "../styles/Cart.css";

const Cart = () => {
    
    const {user} = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch cart products for the logged-in user
    const fetchProducts = async () => {
        if (!user) {
            toast.warn("Please sign in to view your cart.");
            return;
        };

        try {
            const token = localStorage.getItem("token");
            const response = await api.get(`/carts/${user.userId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setProducts(response.data);
        }
        catch (error) {
            toast.error(error.response?.data?.message || "Failed to fetch cart products..");
            setError("Failed to fetch cart products.");
        }
        finally {
            setLoading(false);
        }
    };

    // Fetch products on change
    useEffect(() => {
        fetchProducts();
    }, [user]);

    // If user not logged in
    if (!user) {
        return (
            <section className="cart">
                <h2> My Cart </h2>
                <i> Please sign in to view your cart. </i>
            </section>
        );
    }

    // Loading state
    if (loading) {
        return (
            <div className="loading">
                <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                <p> loading </p>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="error">
                <b> <i className="fa-solid fa-circle-exclamation fa-fade" style={{color: "#fa3232"}}></i> Error </b>
                <p> {error} </p>
            </div>
        );
    }

    return ( 
        <section className="cart">
            <h2> My Cart </h2>
            {/* Card Items */}
            <div className="cart-items">
            { products.length === 0 ? (
                <p> <i> Your cart is empty. </i> </p>
                ) : (
                products.map((product) => ( <CartItem key={product.productId} product={product} onUpdate={fetchProducts} /> ))
            ) }
            </div>
            {/* Checkout Button */}
            { products.length > 0 && ( <Link to='/checkout' className="co-btn"> Checkout <i className="fa-solid fa-cart-shopping fa-fade"></i> </Link> ) }
            {/*  */}
        </section>
    );

};

export default Cart;