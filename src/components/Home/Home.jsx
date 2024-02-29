import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import {useAuth0} from '@auth0/auth0-react'
import { Loading } from "../misc/loading";
// import Adverts from "../Footer/Adverts/Adverts";
// import Newsletter from "../Footer/Newsletter/Newsletter";

const Home = () => {
    const {logout} = useAuth0()
    const { products, setProducts, categories, setCategories , changeLoadingState , isLoading } =
        useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getProducts = () => {
        
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            if (res) {
                changeLoadingState(false)
            }
            setProducts(res);
            
        });
    };
    const getCategories = () => {
        
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            if (res) {
                changeLoadingState(false)
            }
            setCategories(res);
            
        });
    };

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    {isLoading ? (< Loading />) : (<Category headingText="Categories" categories={categories} />)}
                    <Products
                        headingText="Popular Products"
                        products={products}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
