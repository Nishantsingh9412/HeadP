import "./Product.scss";
import prod from '../../../assets/products/earbuds-prod-1.webp';

const Product = (props) => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={process.env.REACT_APP_DEV_URL + props.data.img.data[0].attributes.url} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">{props.data.title}</span>
                <span className="price"> ₹ {props.data.price} </span>
            </div>
        </div>
        );
};

export default Product;
