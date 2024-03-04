import { useNavigate } from "react-router-dom";
import "./Category.scss";


const Category = ({ categories , innerPage, headingText }) => {
    console.log(categories)
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div
                        key={item.id}
                        className="category"
                        onClick={() => navigate(`/category/${item.id}`)}
                    >
                        <img
                            src={
                                item.attributes.img.data.attributes.url
                            }
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
