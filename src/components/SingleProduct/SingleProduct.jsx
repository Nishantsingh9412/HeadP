import React from "react";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { 
    FaFacebook , 
    FaTwitter , 
    FaLinkedinIn ,
    FaInstagram,
    FaPinterest,
    FaCartPlus
} from 'react-icons/fa'

// import prod from "../../assets/products/"
import prod from "../../assets/products/earbuds-prod-2.webp" 

const SingleProduct = () => {
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                    <img src={prod} alt="" />
                <div className="left">Image </div>
                <div className="right"> Prod Details </div>
            </div>
        </div>
    </div>;
};

export default SingleProduct;
