import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import "./Category.scss";
const Category = () => {
    const { id } = useParams();
    const { data } = useFetch(
        `/api/products?populate=*&[filters][categories][id]=${id}`
    );
    console.log(data)
    return (
        <div href='#categories' className="category-main-content">
            <div className="layout">
                <div className="category-title">
                     {id == 5 && data  ? `Easter Day` : id == 6 && data  ? `Mother's Day` : id == 7 && data  ? 'Cakes' : 'Afternoon Tea'}
                </div>
                <Products innerPage={true} products={data} />
            </div>
        </div>
    );
};

export default Category;
