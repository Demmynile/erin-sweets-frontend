import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import {useState} from 'react'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import {Auth0Provider} from '@auth0/auth0-react'
import { Toaster } from "react-hot-toast";
import {PayPalScriptProvider} from '@paypal/react-paypal-js'
// import Partners from "./components/Footer/Partners/Partners";
// import Adverts from "./components/Footer/Adverts/Adverts";

const domain = process.env.REACT_APP_AUTH0_ISSUER_BASE_URL
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

function App() {
    const [isMobile , setIsMobile] = useState(false)

    return (
        <BrowserRouter>
         <PayPalScriptProvider options={{clientId : `${process.env.REACT_APP_PAYPAL_CLIENT_ID}` ,  currency : 'GBP' }}>
        <Auth0Provider
         domain={domain}
         clientId={clientId}
         redirectUri = {window.location.origin}
        
        >
            <AppContext>
                <Toaster />
               
                <Header isMobile={isMobile} setIsMobile = {setIsMobile} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/hire" element={<Hire />} />
                </Routes>
                {/* <Partners /> */}
               
                <Newsletter />
                <Footer />
            </AppContext>
        </Auth0Provider>
        </PayPalScriptProvider>
        </BrowserRouter>
    );
}

export default App;
