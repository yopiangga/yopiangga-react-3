
import grape from '../../assets/images/product/grape.png';
import garlic1 from '../../assets/images/product/garlic1.png';
import meet from '../../assets/images/product/meet.png';
import seafood1 from '../../assets/images/product/seafood1.png';
import seafood2 from '../../assets/images/product/seafood2.png';
import orange from '../../assets/images/product/orange.png';
import tomato from '../../assets/images/product/tomato.png';
import garlic2 from '../../assets/images/product/garlic2.png';

import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import {NavLink} from 'react-router-dom';

import $ from 'jquery';
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
    $('.nav-search').removeClass('active');
    $('.navbar').removeClass('search-active');
}

function btnAll(){
    $('.home-product .content .body .fruits').removeClass('unActive');
    $('.home-product .content .body .vegetables').removeClass('unActive');
    $('.home-product .content .body .garlics').removeClass('unActive');
    $('.home-product .content .body .seafoods').removeClass('unActive');
    $('.home-product .content .body .meets').removeClass('unActive');

    $('.home-product .content .title .button .btn-all').addClass('active');
    $('.home-product .content .title .button .btn-fruits').removeClass('active');
    $('.home-product .content .title .button .btn-vegetables').removeClass('active');
    $('.home-product .content .title .button .btn-garlics').removeClass('active');
    $('.home-product .content .title .button .btn-seafoods').removeClass('active');
    $('.home-product .content .title .button .btn-meets').removeClass('active');
}

function btnFruits(){
    $('.home-product .content .body .fruits').removeClass('unActive');
    $('.home-product .content .body .vegetables').addClass('unActive');
    $('.home-product .content .body .garlics').addClass('unActive');
    $('.home-product .content .body .seafoods').addClass('unActive');
    $('.home-product .content .body .meets').addClass('unActive');

    $('.home-product .content .title .button .btn-all').removeClass('active');
    $('.home-product .content .title .button .btn-fruits').addClass('active');
    $('.home-product .content .title .button .btn-vegetables').removeClass('active');
    $('.home-product .content .title .button .btn-garlics').removeClass('active');
    $('.home-product .content .title .button .btn-seafoods').removeClass('active');
    $('.home-product .content .title .button .btn-meets').removeClass('active');   
}

function btnVegetables(){
    $('.home-product .content .body .fruits').addClass('unActive');
    $('.home-product .content .body .vegetables').removeClass('unActive');
    $('.home-product .content .body .garlics').addClass('unActive');
    $('.home-product .content .body .seafoods').addClass('unActive');
    $('.home-product .content .body .meets').addClass('unActive');

    $('.home-product .content .title .button .btn-all').removeClass('active');
    $('.home-product .content .title .button .btn-fruits').removeClass('active');
    $('.home-product .content .title .button .btn-vegetables').addClass('active');
    $('.home-product .content .title .button .btn-garlics').removeClass('active');
    $('.home-product .content .title .button .btn-seafoods').removeClass('active');
    $('.home-product .content .title .button .btn-meets').removeClass('active');   
}

function btnGarlics(){
    $('.home-product .content .body .fruits').addClass('unActive');
    $('.home-product .content .body .vegetables').addClass('unActive');
    $('.home-product .content .body .garlics').removeClass('unActive');
    $('.home-product .content .body .seafoods').addClass('unActive');
    $('.home-product .content .body .meets').addClass('unActive');

    $('.home-product .content .title .button .btn-all').removeClass('active');
    $('.home-product .content .title .button .btn-fruits').removeClass('active');
    $('.home-product .content .title .button .btn-vegetables').removeClass('active');
    $('.home-product .content .title .button .btn-garlics').addClass('active');
    $('.home-product .content .title .button .btn-seafoods').removeClass('active');
    $('.home-product .content .title .button .btn-meets').removeClass('active');    
}

function btnSeafoods(){
    $('.home-product .content .body .fruits').addClass('unActive');
    $('.home-product .content .body .vegetables').addClass('unActive');
    $('.home-product .content .body .garlics').addClass('unActive');
    $('.home-product .content .body .seafoods').removeClass('unActive');
    $('.home-product .content .body .meets').addClass('unActive');

    $('.home-product .content .title .button .btn-all').removeClass('active');
    $('.home-product .content .title .button .btn-fruits').removeClass('active');
    $('.home-product .content .title .button .btn-vegetables').removeClass('active');
    $('.home-product .content .title .button .btn-garlics').removeClass('active');
    $('.home-product .content .title .button .btn-seafoods').addClass('active');
    $('.home-product .content .title .button .btn-meets').removeClass('active');   
}

function btnMeets(){
    $('.home-product .content .body .fruits').addClass('unActive');
    $('.home-product .content .body .vegetables').addClass('unActive');
    $('.home-product .content .body .garlics').addClass('unActive');
    $('.home-product .content .body .seafoods').addClass('unActive');
    $('.home-product .content .body .meets').removeClass('unActive');

    $('.home-product .content .title .button .btn-all').removeClass('active');
    $('.home-product .content .title .button .btn-fruits').removeClass('active');
    $('.home-product .content .title .button .btn-vegetables').removeClass('active');
    $('.home-product .content .title .button .btn-garlics').removeClass('active');
    $('.home-product .content .title .button .btn-seafoods').removeClass('active');
    $('.home-product .content .title .button .btn-meets').addClass('active');    
}

function addShopping(){
    $('nav .content .icon .cart .notif').addClass('animate__animated animate__bounce').delay(500);
    setTimeout(function(){
        $('nav .content .icon .cart .notif').removeClass('animate__animated animate__bounce');
    }, 1000);
}


function HomeProduct(){
    return (
        <section className="home-product" onClick={btnMenuDown}>
        <div className="content">
            <div className="title">
                <h2>NEW PRODUCTS</h2>
                <h6>- Featured Products - </h6>
                <div className="button">
                    <button className="btn-all active" onClick={btnAll}>All</button>
                    <button className="btn-fruits" onClick={btnFruits}>Fruits</button>
                    <button className="btn-vegetables" onClick={btnVegetables}>Vegetables</button>
                    <button className="btn-garlics" onClick={btnGarlics}>Garlics</button>
                    <button className="btn-seafoods" onClick={btnSeafoods}>SeaFoods</button>
                    <button className="btn-meets" onClick={btnMeets}>Meets</button>
                </div>
            </div>
            <div className="body">
                <div className="produk fruits">
                    <div className="produk-img">
                        <img src={grape} alt="" />
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
                        <h4>Purple Grape</h4>
                        <hr />
                        <h6>$15.00</h6>
                    </div>
                </div>
                <div className="produk garlics">
                    <div className="produk-img">
                        <img src={garlic1} alt="" />
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
                        <h4>Great Garlic</h4>
                        <hr />
                        <h6>$3.99</h6>
                    </div>
                </div>
                <div className="produk meets">
                    <div className="produk-img">
                        <img src={meet} alt="" />
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
                        <h4>Meet Burger</h4>
                        <hr />
                        <h6>$11.99</h6>
                    </div>
                </div>
                <div className="produk seafoods">
                    <div className="produk-img">
                        <img src={seafood1} alt="" />
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
                        <h4>Large Shrimp</h4>
                        <hr />
                        <h6>$12.99</h6>
                    </div>
                </div>
                <div className="produk seafoods">
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
                <div className="produk fruits">
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
                <div className="produk garlics">
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

export default HomeProduct;