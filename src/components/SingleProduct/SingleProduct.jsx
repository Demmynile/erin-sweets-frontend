import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import { formatNumber } from "../../utils/currency";
import { Loading } from "../misc/loading";

const SingleProduct = () => {
    
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    const { handleAddToCart} = useContext(Context)

    

    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };
    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };



    const product =  data?.data?.[0]?.attributes;
    console.log(product)

    return (
    
            
          <div className="single-product-main-content">
                <div className="layout">
                { product ? 
                <div className="single-product-page">
                        <div className="left">
                            <img
                                src={
                                    product?.image?.data[0]?.attributes?.url
                                }
                                alt="single-product-image"
                            />
                        </div>
                        <div className="right">
                            <span className="name">{product?.title}</span>
                            <span className="price">{formatNumber(product?.price)}</span>
                            <span className="desc">{product?.description}</span>

                            <div className="cart-buttons">
                                <div className="quantity-buttons">
                                    <span onClick={decrement}>-</span>
                                    <span>{quantity}</span>
                                    <span onClick={increment}>+</span>
                                </div>
                                <button
                                    className="add-to-cart-button"
                                    onClick={() => {
                                        handleAddToCart(data?.data?.[0], quantity);
                                        setQuantity(1);
                                    }}
                                >
                                    <FaCartPlus size={20} />
                                    ADD TO CART
                                </button>
                            </div>

                            <span className="divider" />
                            <div className="info-item">
                                <span className="text-bold">
                                    Category:{" "}
                                    <span>
                                        {
                                            product?.categories?.data[0]?.attributes
                                                .title
                                        }
                                    </span>
                                </span>
                                <span className="text-bold">
                                    Share:
                                    <span className="social-icons">
                                        <FaFacebookF size={16} />
                                        <FaTwitter size={16} />
                                        <FaInstagram size={16} />
                                        <FaLinkedinIn size={16} />
                                        <FaPinterest size={16} />
                                    </span>
                                </span>
                            </div>
                        </div>
                </div> 
                : 
                <Loading /> 
                }
         
                <RelatedProducts
                        productId={id}
                        categoryId={product?.categories?.data[0]?.id}
                />
               
                </div>
             </div>
            
       
       
    );
};

export default SingleProduct;
