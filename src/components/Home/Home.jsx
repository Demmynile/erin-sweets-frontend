import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import {useAuth0} from '@auth0/auth0-react'
import { Loading } from "../../utils/loading";
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
        changeLoadingState(false)
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            setProducts(res);
            changeLoadingState(true)
        });
    };
    const getCategories = () => {
        changeLoadingState(false)
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            setCategories(res);
            changeLoadingState(false)
        });
    };

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    {!isLoading ? (< Loading />) : (<Category headingText="Categories" categories={categories} />)}
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
