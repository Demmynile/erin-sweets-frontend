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
                     {id && data == 5 ? `Easter Day` : id && data == 6 ? `Mother's Day` : id && data == 7 ? 'Cakes' : 'Afternoon Tea'}
                </div>
                <Products innerPage={true} products={data} />
            </div>
        </div>
    );
};

export default Category;
