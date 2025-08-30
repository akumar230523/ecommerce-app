import { Link } from "react-router-dom";

import "../styles/Home.css";

const Home = () => {

    return (
        <section className="home">
            <h1> ShoppyGlobe </h1>
            <hr />
            <h6> " Your Global Destination for Online Shopping. " </h6>
            <Link to='product-list' className="sn-btn"> Shop Now </Link>
            <div className="social">
                <a href="https://twitter.com" target="_blank"> <i className="fa-brands fa-x-twitter" style={{color:'#ffffff'}}></i> </a>
                <a href="https://instagram.com" target="_blank"> <i className="fa-brands fa-instagram" style={{color:'#d62976'}}></i> </a>
                <a href="https://telegram.org" target="_blank"> <i className="fa-brands fa-telegram" style={{color:'#0088cc'}}></i> </a>
                <a href="https://youtube.com" target="_blank"> <i className="fa-brands fa-youtube" style={{color:'#ff0000'}}></i> </a>
            </div>
        </section>
    );

};

export default Home;
