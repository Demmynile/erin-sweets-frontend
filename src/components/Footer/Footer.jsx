import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                {/* <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Introducing Erin's Sweet Treats, where sweetness knows no bounds and every bite is a celebration of indulgence. 
                    Nestled in the heart of [Location], our boutique bakery is a haven for those with a penchant for all things delicious. 
                    With a passion for baking that runs as deep as the warm aroma of freshly baked goods, 
                    Erin's Sweet Treats is more than just a bakery—it's a destination for culinary enchantment.
                    </div>
                </div> */}
               
                <div className="col">
                     <div className="title">Links</div>
                    <span className="text">Easter</span>
                    <span className="text">Mother's Day</span>
                    <span className="text">Cakes</span>
                    <span className="text">Hire</span>
                    <span className="text">Gallery</span>  
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Categories</span>
                    <span className="text">Contact</span>
                </div>

                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            58,Bampton Street EX16 6AH
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0188490687</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: info@erinsweettreats.com</div>
                    </div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                    &copy;2024 Sinnerman Technologies
                    </span>
                    <img src={Payment} alt = "footer-image" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
