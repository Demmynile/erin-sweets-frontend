import "./Products.scss";
import Product from "./Product/Product";
import {Loading} from '../misc/loading'

const Products = ({ products, innerPage, headingText }) => {
    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                {products ? products?.data?.map((item) => (
                    <Product
                        key={item?.id}
                        id={item?.id}
                        data={item?.attributes}
                    />
                )) : <Loading />}
            </div>
        </div>
    );
};

export default Products;
