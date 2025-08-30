import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import AuthContext from "../context/AuthContext";
import Theme from "../context/Theme";

import "../styles/Header.css";

const Header = () => {

    const {user, setUser} = useContext(AuthContext);
    const {isTheme, setIsTheme} = useContext(Theme);
    const [isNav, setIsNav] = useState(false);

    const navigate = useNavigate();

    // Toggles dark/light theme
    const handleTheme = () => setIsTheme((prev) => !prev);

    // Toggle mobile nav
    const handleNav = () => setIsNav((prev) => !prev);

    // Handle sign out
    const handleSignOut = async () => {
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        toast.success("Signed out! See you soon 👋");
        navigate('/');
    }

    return (
        <header>
            {/* Logo */}
            <h1> <img src="ShoppyGlobe.png" alt="" /> <NavLink to='/'> ShoppyGlobe </NavLink> </h1>
            {/* Navigation */}
            <nav className={` ${ isNav ? "open" : "" } `}>
                <NavLink to='/' className="nav"> <i className="fa-regular fa-house"></i> Home </NavLink>
                <NavLink to='/product-list' className="nav"> <i className="fa-brands fa-product-hunt"></i> Products </NavLink>
                <NavLink to='/cart' className="nav"> <i className="fa-solid fa-cart-shopping"></i> MyCart </NavLink>
                { user ? (
                    <button className="nav" onClick={handleSignOut}> <i className="fa-regular fa-circle-user"></i> SignOut </button>
                ) : (
                    <NavLink to='/sign-in' className="nav"> <i className="fa-regular fa-circle-user"></i> SignIn </NavLink>
                ) }
                <NavLink to='/ach' className="nav"> <i className="fa-solid fa-info"></i> Help </NavLink>
            </nav>
            {/* Header buttons */}
            <div className="h-btn">
                <button onClick={handleTheme}> <i className={` fa-solid ${ isTheme ? "fa-sun" : "fa-moon" } `}></i> </button>
                <button id="bars" onClick={handleNav}> <i className="fa-solid fa-bars"></i> </button>
            </div>
        </header>
    );
    
};

export default Header;
