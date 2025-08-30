import { Link } from "react-router-dom";

import "../styles/Footer.css";

const Footer = () => {

    return (
        <footer>
            <div className="footer-top">
                <div className="f-ach">
                    <Link to='/ach'> About Us </Link> | <Link to='/ach'> Contact Us </Link> | <Link to='/ach'> Help </Link>
                </div>
                <div className="f-social">
                    <p> Follow us: </p>
                    <a href="https://twitter.com" target="_blank"> <i className="fa-brands fa-x-twitter"></i> </a>
                    <a href="https://instagram.com" target="_blank"> <i className="fa-brands fa-instagram"></i> </a>
                    <a href="https://telegram.org" target="_blank"> <i className="fa-brands fa-telegram"></i> </a>
                    <a href="https://youtube.com" target="_blank"> <i className="fa-brands fa-youtube"></i> </a>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p> &copy; 2025 ShoppyGlobe <br /> ( All Rights Reserved ) </p>
            </div>
        </footer>
    );

};

export default Footer;