import { FiSearch, FiShoppingCart } from 'react-icons/fi';

import seafood2 from '../../assets/images/product/seafood2.png';
import orange from '../../assets/images/product/orange.png';
import tomato from '../../assets/images/product/tomato.png';
import garlic2 from '../../assets/images/product/garlic2.png';

import $ from 'jquery';
import {NavLink} from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
    $('.nav-search').removeClass('active');
    $('.navbar').removeClass('search-active');
}

function addShopping(){
    $('nav .content .icon .cart .notif').addClass('animate__animated animate__bounce').delay(500);
    setTimeout(function(){
        $('nav .content .icon .cart .notif').removeClass('animate__animated animate__bounce');
    }, 1000);
}

export default function ProductDetailRelated(){
    return(
    <section className="product-detail-related" onClick={btnMenuDown}>
        <div className="content">
            <div className="content-head">
                <h2>Related Poducts</h2>
            </div>
            <div className="content-body">
                <div className="produk vegetables">
                    <div className="produk-img">
                        <img src={seafood2} alt="" />
                        <div className="menu">
                            <NavLink exact to="/product-detail">
                                <div className="circle">
                                    <FiSearch color="white" size="24px"/> 
                                </div>
                            </NavLink>
                            
                            <div className="circle add-shopping" onClick={addShopping}>
                                <FiShoppingCart color="white" size="24px"/>
                            </div>
                        </div>
                    </div>
                    <div className="produk-body">
                        <h4>Fresh Lobster</h4>
                        <hr />
                        <h6>$14.00</h6>
                    </div>
                </div>
                <div className="produk vegetables">
                    <div className="produk-img">
                        <img src={orange} alt="" />
                        <div className="menu">
                            <NavLink exact to="/product-detail">
                                <div className="circle">
                                    <FiSearch color="white" size="24px"/> 
                                </div>
                            </NavLink>
                            
                            <div className="circle add-shopping" onClick={addShopping}>
                                <FiShoppingCart color="white" size="24px"/>
                            </div>
                        </div>
                    </div>
                    <div className="produk-body">
                        <h4>Orange Fruit</h4>
                        <hr />
                        <h6>$2.99</h6>
                    </div>
                </div>
                <div className="produk vegetables">
                    <div className="produk-img">
                        <img src={tomato} alt="" />
                        <div className="menu">
                            <NavLink exact to="/product-detail">
                                <div className="circle">
                                    <FiSearch color="white" size="24px"/> 
                                </div>
                            </NavLink>
                            
                            <div className="circle add-shopping" onClick={addShopping}>
                                <FiShoppingCart color="white" size="24px"/>
                            </div>
                        </div>
                    </div>
                    <div className="produk-body">
                        <h4>Vegetable Tomatoes</h4>
                        <hr />
                        <h6>$3.99</h6>
                    </div>
                </div>
                <div className="produk vegetables">
                    <div className="produk-img">
                        <img src={garlic2} alt="" />
                        <div className="menu">
                            <NavLink exact to="/product-detail">
                                <div className="circle">
                                    <FiSearch color="white" size="24px"/> 
                                </div>
                            </NavLink>
                            
                            <div className="circle add-shopping" onClick={addShopping}>
                                <FiShoppingCart color="white" size="24px"/>
                            </div>
                        </div>
                    </div>
                    <div className="produk-body">
                        <h4>Large Onion</h4>
                        <hr />
                        <h6>$7.99</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}