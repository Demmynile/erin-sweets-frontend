import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/context";
import CartItem from "./CartItem/CartItem";
// import { makePaymentRequest } from "../../utils/api";
// import { useAuth0 } from '@auth0/auth0-react'
import "./Cart.scss";
import { formatNumber } from "../../utils/currency";
import Checkout from "./Checkout";



const Cart = () => {
    // const { isAuthenticated , loginWithRedirect , user} = useAuth0()

    const { cartItems, cartSubTotal , setShowCart } = useContext(Context);

    return (
        <div className="cart-panel">
            <div
                className="opac-layer"
                onClick={() => setShowCart(false)}
            ></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span
                        className="close-btn"
                        onClick={() => setShowCart(false)}
                    >
                        <MdClose className="close-btn" />
                        <span className="text">close</span>
                    </span>
                </div>

                {!cartItems.length && (
                    <div className="empty-cart">
                        <BsCartX />
                        <span>No products in the cart.</span>
                        <button className="return-cta" onClick={() => {}}>
                            RETURN TO SHOP
                        </button>
                    </div>
                )}

                {!!cartItems.length && (
                    <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Subtotal:</span>
                                <span className="text total">
                                    {formatNumber(cartSubTotal)}
                                </span>
                            </div>
                            <div className="button">
                                <Checkout />        
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
