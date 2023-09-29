import React from "react";
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="aboutUs">
            <div>
                <img className="aboutUs-image" src="https://qurinomsolutions.com/wp-content/uploads/2020/02/home1-welcome.jpg" alt="Home Welcome" />
            </div>
            <div className="aboutUs-container">
                <div className="aboutUs-subtitle">
                    About Our Company
                </div>
                <h1 className="aboutUs-title">
                    Enhancing connectivity through digital transformation and App development solutions
                </h1>
                <div className="aboutUs-title-desc">
                    Our customer-friendly approach keeps us moving ahead in the process of serving unique and compelling designs. We are here to serve a never-forgetting experience to your customers.
                </div>
                <div className="aboutUs-features-container">
                    <div className="aboutUs-features">
                        <div className="aboutUs-features-image">
                            <img src="https://qurinomsolutions.com/wp-content/uploads/2020/02/home1-icon1.png" alt="Home Icon" />
                        </div>
                        <div>
                            <div className="aboutUs-features-subtitle">
                                Customer Centric
                            </div>
                            <div className="aboutUs-feature-desc">
                                We take every client as our First and handle their issues with utmost precision and with punctuality.
                            </div>
                        </div>
                    </div>
                    <div className="aboutUs-features">
                        <div className="aboutUs-features-image">
                            <img src="https://qurinomsolutions.com/wp-content/uploads/2020/02/icon-megaphone.png" alt="Home Icon" />
                        </div>
                        <div>
                            <div className="aboutUs-features-subtitle">
                                Team Work
                            </div>
                            <div className="aboutUs-feature-desc">
                                We are a multifaceted team of experts from different domains, which works to provide solutions that drive results.
                            </div>
                        </div>
                    </div>
                    <div className="aboutUs-features">
                        <div className="aboutUs-features-image">
                            <img src="https://qurinomsolutions.com/wp-content/uploads/2020/02/icon-bulb.png" alt="Home Icon" />
                        </div>
                        <div>
                            <div className="aboutUs-features-subtitle">
                                Integrity
                            </div>
                            <div className="aboutUs-feature-desc">
                                We uphold the sense of integrity and work according to industry standards and globally recognised principles.
                            </div>
                        </div>
                    </div>
                    <div className="aboutUs-features">
                        <div className="aboutUs-features-image">
                            <img src="https://qurinomsolutions.com/wp-content/uploads/2020/02/home1-icon2.png" alt="Home Icon" />
                        </div>
                        <div>
                            <div className="aboutUs-features-subtitle">
                                Emerging Technologies
                            </div>
                            <div className="aboutUs-feature-desc">
                                Emerging technologies are technologies whose development, practical applications, or both are still largely unrealized.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;