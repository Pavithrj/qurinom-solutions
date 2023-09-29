import React from "react";
import './TopBar.css';

function TopBar() {
    return (
        <div className="topbar">
            <div className="topbar-left"></div>
            <div className="topbar-links">
                <div className="topbar-links-right">
                    <a className="topbar-social-links" href="https://twitter.com/qurinom?s=08">
                    </a>
                    <a className="topbar-social-links" href="https://www.facebook.com/100655078397148/">
                    </a>
                    <a className="topbar-social-links" href="https://www.linkedin.com/company/qurinomsolutions">
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TopBar;