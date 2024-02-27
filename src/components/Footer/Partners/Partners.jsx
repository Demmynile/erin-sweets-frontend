import React from "react";
import "./Partners.scss";
import slide from '../../../assets/slidesmain.mp4'

const Partners = () => {
    return (
        <div className="partners-section">
               
            <video autoPlay loop muted>
                <source src={slide} type="video/mp4" />
                
            </video>
      {/* Additional content can be added on top of the video background */}
    

        </div>
    );
};

export default Partners;
