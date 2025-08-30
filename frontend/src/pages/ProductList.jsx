import { useEffect, useState, useMemo } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

import ProductItem from "../components/ProductItem";

import "../styles/ProductList.css";

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTitle, setSearchTitle] = useState("");
    const [searchCategory, setSearchCategory] = useState("all");

    // Fetch products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('/products');
                setProducts(response.data);
            }
            catch (error) {
                toast.error(error.response?.data?.message || "Failed to fetch products..");
                setError("Failed to fetch products.");
            }
            finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    // Get unique categories
    const productCategories = useMemo(() => {
        return [ "all", ...new Set(products.flatMap(product => product?.category)) ]
    }, [products]);

    // Filter products based on title and category
    const filteredProducts = products.filter(product => {
        const matchesTitle = product.title.toLowerCase().includes(searchTitle.toLowerCase());
        const matchesCategory = searchCategory === "all" || product.category.includes(searchCategory);
        return matchesTitle && matchesCategory;
    });

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
                <b> <i className="fa-solid fa-circle-exclamation fa-fade" style={{color: "#fa3232"}}></i> </b>
                <p> {error} </p>
            </div>
        );
    }

    return (
        <section className="product-list">
            <h2> Products </h2>
            {/* Search Title Input */}
            <input type="text" placeholder="Search Product.." value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} />
            {/* Search Categories Button */}
            <div className="category">
                { productCategories.map(cat => (
                    <button key={cat} className={searchCategory === cat ? "active" : ""} onClick={() => setSearchCategory(cat)}>
                        {cat}
                    </button>
                )) }
            </div>
            {/* Product Items */}
            <div className="product-items">
                { filteredProducts.length === 0 ? (
                    <p> <i> No products found. </i> </p>
                ) : (
                    filteredProducts.map(product => ( <ProductItem key={product.id} product={product} /> ))
                ) }
            </div>
            {/*  */}
        </section>
    );

};

export default ProductList;
