import React from "react";
import "./Adverts.scss";
import Valentine from '../../../assets/valentine.webp'

const Adverts = () => {
    return (
        <div className="ads-hero-banner">
            <div className="ads-content">
                <div className="ads-text-content">
                    <h1>Special Deals</h1>
                    <p>
                    
"Indulge in love's sweet embrace this Valentine's Day with cakes from Erin Sweet Treats. 
Let our decadent creations be the centerpiece of your celebration. From heart-shaped delights to personalized treats, 
we bake with passion to make your day unforgettable. Share the love with Erin Sweet Treats"
                    </p>
                    <div className="ads-ctas">
                        {/* <div className="banner-cta">Read More</div> */}
                        <div className="ads-banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="ads-banner-img" src={Valentine} />
            </div>
        </div>
    );
};

export default Adverts;
