import React from "react";
import './HeaderContent.css';

function HeaderContent() {
    return (
        <div className="headerContent">
            <div>
                <div className="headerContent-company-title">
                    <div>
                        Digital Transformation
                    </div>
                    <div>
                        with Qurinom Solutions
                    </div>
                </div>
                <div className="headerContent-company-details">
                    <div>
                        Qurinom Solutions - A Global product cum  service-based IT
                    </div>
                    <div>
                        Company, Building Brands and ...
                    </div>
                </div>
                <div className="headerContent-btn-slider">
                    <button className="headerContent-btn">Read More</button>
                    <img className="slider-image-one" src="https://qurinomsolutions.com/wp-content/uploads/2020/02/slider1-art8.png" alt="slider" />
                </div>
            </div>
            <div>
                <img className="slider-image-two" src="https://qurinomsolutions.com/wp-content/uploads/2020/02/slider1-pic.png" alt="slider" />
            </div>
        </div>
    )
}

export default HeaderContent;