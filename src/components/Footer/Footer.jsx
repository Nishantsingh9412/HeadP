import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa";
import Payment from '../../assets/payments.png';


import React from "react";
import "./Footer.scss";
const Footer = () => { 
    return (
        <footer className="footer">
             <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Fugiat eius facere cumque dolore optio mollitia
                      ratione, repellat pariatur asperiores impedit debitis consequuntur qui consequatur quidem illum. Illo tempora sed sunt.
                      </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-items">
                        <FaLocationArrow />
                            <div className="text">
                                Kayaloram Rd. Punnamada, Kottankutangara, Alappuzha,
                                Kerala, 688006
                            </div>
                     </div>

                     <div className="c-items">
                        <FaMobileAlt />
                            <div className="text">
                                Phone : 011 225 4456
                            </div>
                     </div>

                     <div className="c-items">
                        <FaEnvelope />
                            <div className="text">
                                Email : stores@jsdev.com
                            </div>
                     </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                            <span className="text">
                                Headphones
                            </span>
                            <span className="text">
                                Smart Watches
                            </span>
                            <span className="text">
                                Bluetooth Speakers
                            </span>
                            <span className="text">
                                Wireless Earbuds
                            </span>
                            <span className="text">
                                Home theatre
                            </span>
                            <span className="text">
                                Projectors
                            </span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <       span className="text">
                                Home 
                            </span>
                            <span className="text">
                               About
                            </span>
                            <span className="text">
                                Privacy Policy
                            </span>
                            <span className="text">
                               Returns
                            </span>
                            <span className="text">
                                Terms and Conditions
                            </span>
                            <span className="text">
                                Contact Us
                            </span>
                </div>
             </div>
                <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <div className="text">
                            JSDEVSTORE 2022 CREATED BY JS DEV. PREMIUM E-COMMERCE
                            SOLUTIONS.
                        </div>
                        <img src={Payment} />
                    </div>
                </div>
        </footer>
    );

    
};

export default Footer;
