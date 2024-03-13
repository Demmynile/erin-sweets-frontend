import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import { Loading } from "../misc/loading";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Partners from "../Footer/Partners/Partners";
// import Adverts from "../Footer/Adverts/Adverts";
// import Newsletter from "../Footer/Newsletter/Newsletter";

const Home = () => {
   
    const { products, setProducts, categories, setCategories , changeLoadingState , isLoading } =
        useContext(Context);

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
    const getOrders = () => {
        
        fetchDataFromApi("/api/orders?populate=*").then((res) => {
            return res
            
        });
    };

    useEffect(() => {
        getProducts();
        getCategories();
        getOrders();
    }, []);


    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    {!isLoading ? (<Category headingText="Categories" categories={categories} />) : (< Loading />)  }
                    {!isLoading ? (<Products
                        headingText="Popular Products"
                        products={products}
                    />) : (< Loading />)}
                 
                </div>
                <div className="others">
                   <Partners />
                   <Newsletter />
                  
                </div>
            </div>
        </div>
    );
};

export default Home;
