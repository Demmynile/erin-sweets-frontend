import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";
import { formatNumber } from "../../../utils/currency";
import { Loading } from "../../misc/loading";

const Product = ({ data, id }) => {
    const navigate = useNavigate();


    return (
    <div>
     {data
          ? 
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                <img
                    src={
                        data.image.data[0].attributes.url
                    }
                />
            </div>
            <div className="prod-details">
                <span className="name">{data?.title}</span>
                <span className="price">{formatNumber(data?.price)}</span>
            </div>
        </div>
    :
    <Loading /> 
    }
    </div> 
       
    );
};

export default Product;
