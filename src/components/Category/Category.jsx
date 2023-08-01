import "./Category.scss";
import Products from '../Products/Products'
// import '../Category/Category.scss'
import Cat from '../Home/Category/Category'
const Category = () => {
    return (
            <div className="category-main-content">
                <div className="layout">
                    <div className="category-title">Category Title </div>
                    <Cat innerPage={true}/>
                </div>
            </div>
            );
};

export default Category;
