import { Link } from "react-router-dom";

import "../styles/ACH.css";

const ACH = () => {

    return (
        <section className="ach">
            <h2> About / Contact / Help </h2>
            {/* About */}
            <div className="ach-div">
                <h3> About Us </h3>
                <p> 
                    An e-commerce application developed using React and CSS with real-time product data from DummyJSON API. 
                    This application provides comprehensive product browsing, product search and filtering, detailed product views, 
                    shopping cart functionality, and responsive design experience.
                </p>
            </div>
            {/* Contact */}
            <div className="ach-div">
                <h3> Contact Us </h3>
                <p> <i> Have questions or feedback? We'd love to hear from you! </i> </p>
                <p> <b> Email: </b> support@shoppyglobe.com </p>
                <p> <b> Phone: </b> +91-9876543210 </p>
                <p> <b> Address: </b> ABC-123/45 F/S, New Delhi, Delhi, India - 110045 </p>
            </div>
            {/* Help */}
            <div className="ach-div">
                <h3> Help! </h3>
                <p> <i> Need assistance? Check out our frequently asked questions below. </i> </p>
                <p> How do I track my order? </p>
                <p> What is your return policy? </p>
                <p> How can I cancel or modify my order? </p>
                <p> How do I contact customer support? </p>
            </div>
            {/* Back Button */}
            <Link to='/' className="back-btn"> <i className="fa-solid fa-arrow-left"></i> Back Home </Link>
            {/*  */}
        </section> 
    );

};

export default ACH;
