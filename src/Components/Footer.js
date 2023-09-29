import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div>
                <img className="company-logo" src="https://qurinomsolutions.com/wp-content/uploads/2021/03/Group-11.png" alt="Qurinom Solutions" />
                <div className="company-desc">
                    Qurinom Solutions is a global product cum service based company empowered with Innovative Research & Development, Implementation and Rapid Delivery. We specialise in Artificial Intelligence, IoT and Embedded Systems based Android & IOS Mobile Applications, UX/UI Modernisation, Cloud & Digital Transformation, Healthcare Services,
                    Structural & Interior Design and also render services for hedge clients over Digital Marketing & Consultancy in cross-functional Domains.
                </div>
            </div>
            <div>
                <div className="company-services">
                    Our Services
                </div>
                <div className="services">
                    <div>UX/UI Modernisation</div>
                    <div>Product Development</div>
                    <div>Digital Marketing</div>
                    <div>Digital Transformation</div>
                    <div>Health Care</div>
                    <div>IT Consulting</div>
                    <div>Cloud Migration</div>
                </div>
            </div>
            <div>
                <div className="company-links">
                    Quick Links
                </div>
                <div className="links">
                    <div>Home</div>
                    <div>About Us</div>
                    <div>Services</div>
                    <div>Products</div>
                    <div>Contact Us</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;