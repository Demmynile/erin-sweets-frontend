import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgLogOut, CgShoppingCart } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
// import { CgLogOut } from "react-icons/cg";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import { useAuth0 } from '@auth0/auth0-react'
import NavComp from "./NavComponent/NavComp";
import { MdOutlineCancel } from "react-icons/md";
import logo from '../../assets/Untitled_design_.png'

const Header = ({isMobile , setIsMobile}) => {
    const { loginWithRedirect , isAuthenticated , logout} = useAuth0()
    console.log(isAuthenticated)


    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const { cartCount, showCart, setShowCart } = useContext(Context);

    return (
        <>
            {/* Navigation Bar */}
            <header
                    className={`announcement ${scrolled ? "sticky-header" : ""}`}  
                >
                    <div className="header-content">
                       
                        <div className="center" onClick={() => navigate("/")}>
                            SIGN UP AND GET 5% DISCOUNT OFF.
                            {/* <button className="ann">
                                Sign Up
                            </button> */}
                        </div>
                     
                    </div>
            </header>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}  
            >
                <div className="header-content">
                   
                    <ul className="left">
                    
                        <li onClick={() => navigate("/")}>Home</li>
        
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                        <img src={logo} alt="" className="logo" />
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setSearchModal(true)} />
                    {/* // write a conditional statement for being logged in  */}

                      {/* {!isAuthenticated && <CgProfile /> }  */}
                       {!isAuthenticated && (<CgProfile  onClick = {() => loginWithRedirect()}/>)} 
                       {isAuthenticated && (<CgLogOut  onClick = {() => logout()}/>)} 
                       
                       
                        <span
                            className="cart-icon"
                            onClick={() => setShowCart(true)}
                        >
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                        {isMobile ?
                         (<MdOutlineCancel  onClick={() => setIsMobile(!isMobile)} className={isMobile ? 'mob' :  'desk'}/>)
                           : 
                         (<RxHamburgerMenu  onClick={() => setIsMobile(!isMobile)} className={isMobile ? 'mob' :  'desk'}/>)
                        }
                   
                       
                    </div>
                </div>
            </header>
            {/* Mobile screens */}
            {isMobile && 
            (
            <div>
          
            </div>
            )}
            {searchModal && <Search setSearchModal={setSearchModal} />}
            {showCart && <Cart />}
            {/* Navigation Bar Component */}
            <NavComp isMobile = {isMobile} setIsMobile = {setIsMobile}/>
        </>
    );
};

export default Header;
