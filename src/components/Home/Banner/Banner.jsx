import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/main.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    
                    <div className="ctas">
                        {/* <div className="banner-cta">Read More</div> */}
                        {/* <div className="banner-cta v2">Shop Now</div> */}
                    </div>
                </div>
                {/* <img className="banner-img" src={BannerImg} /> */}
            </div>
        </div>
    );
};

export default Banner;
