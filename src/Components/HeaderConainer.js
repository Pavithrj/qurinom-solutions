import React from "react";
import './HeaderContainer.css';

function HeaderContainer() {
    return (
        <div className="headerContainer">
            <div>
                <img className="company-logo" src="https://qurinomsolutions.com/wp-content/uploads/2021/03/Group-11.png" alt="Qurinom Solutions" />
            </div>
            <div className="headerContainer-pages">
                <div>
                    <a className="headerContainer-page-link" href="https://qurinomsolutions.com/">HOME</a>
                </div>
                <div>
                    <a className="headerContainer-page-link" href="https://qurinomsolutions.com/services/">SERVICES</a>
                </div>
                <div>
                    <a className="headerContainer-page-link" href="https://qurinomsolutions.com/products/">PRODUCTS</a>
                </div>
                <div>
                    <a className="headerContainer-page-link" href="https://qurinomsolutions.com/company/">COMPANY</a>
                </div>
                <div>
                    <a className="headerContainer-page-link" href="https://qurinomsolutions.com/blogs/">BLOGS</a>
                </div>
            </div>
        </div>
    )
}

export default HeaderContainer;