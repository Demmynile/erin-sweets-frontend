import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import "./Category.scss";
import { Loading } from "../misc/loading";

const Category = () => {
    const { id } = useParams();
    const { data } = useFetch(
        `/api/products?populate=*&[filters][categories][id]=${id}`
    );

    return (
        <div href='#categories' className="category-main-content">
           {
          data ?
          
        <div className="layout">
            <div className="category-title">
                {id === 1 && data  ? `Easter Day`  : id === 2 && data  ? 'Cakes' : id === 3 && data  ? 'Afternoon Tea' : null}
            </div>
            <Products innerPage={true} products={data} />
        </div> 
           : <Loading /> } 
        </div>
    );
};

export default Category;
