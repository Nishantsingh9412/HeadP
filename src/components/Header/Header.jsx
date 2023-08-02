import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { TbSearch } from "react-icons/tb";
import { useState , useEffect ,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";

import "./Header.scss";


const Header = () => {
    const[scrolled,setScrolled] = useState(false);
    const [showCart,setShowCart] = useState(false);
    const handleScroll = () =>{
        const offset = window.scrollY;
        console.log(offset);
        if(offset>200){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    };

    useEffect(()=>{
        // console.log('Hi UseEffect');
        window.addEventListener("scroll",handleScroll);
    },[])
    
    return (
        //  Empty fragement is for removing the error  
        <>           
        <header className={`main-header ${scrolled? "sticky-header " : ""} `}> 
            <div className="header-content">
                <ul className="left">
                    <l1 className="list_items"> Home</l1> 
                    <l1 className="list_items"> About </l1>
                    <l1 className="list_items"> Categories </l1>   
                </ul>
                <div className="center"> JSBABA </div>
                <div className="right">
                    <TbSearch />
                    <AiOutlineHeart />
                    <span className="cart-icon">
                        <CgShoppingCart />
                        <span>5</span>
                    </span>
                </div>
            </div>
        </header>
        { showCart &&  <Cart />}
    </>             //  Empty fragement is for removing the error 
    );
};

export default Header;
 
