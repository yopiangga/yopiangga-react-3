
import chili from '../../assets/images/product/chili.png';
import garlic1 from '../../assets/images/product/garlic1.png';
import garlic2 from '../../assets/images/product/garlic2.png';
import garlic3 from '../../assets/images/product/garlic3.png';
import grape from '../../assets/images/product/grape.png';
import lecy from '../../assets/images/product/lecy.png';
import meet from '../../assets/images/product/meet.png';
import orange from '../../assets/images/product/orange.png';
import seafood1 from '../../assets/images/product/seafood1.png';
import seafood2 from '../../assets/images/product/seafood2.png';
import squash from '../../assets/images/product/squash.png';
import tomato from '../../assets/images/product/tomato.png';

import { FiSearch, FiShoppingCart } from 'react-icons/fi';

import $ from 'jquery';

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
}

$(document).ready(function(){
    $('.products-product .content .title .button .btn-all').click(function(){
        $('.products-product .content .body .fruits').removeClass('unActive');
        $('.products-product .content .body .vegetables').removeClass('unActive');
        $('.products-product .content .body .garlics').removeClass('unActive');
        $('.products-product .content .body .seafoods').removeClass('unActive');
        $('.products-product .content .body .meets').removeClass('unActive');

        $('.products-product .content .title .button .btn-all').addClass('active');
        $('.products-product .content .title .button .btn-fruits').removeClass('active');
        $('.products-product .content .title .button .btn-vegetables').removeClass('active');
        $('.products-product .content .title .button .btn-garlics').removeClass('active');
        $('.products-product .content .title .button .btn-seafoods').removeClass('active');
        $('.products-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.products-product .content .title .button .btn-fruits').click(function(){
        $('.products-product .content .body .fruits').removeClass('unActive');
        $('.products-product .content .body .vegetables').addClass('unActive');
        $('.products-product .content .body .garlics').addClass('unActive');
        $('.products-product .content .body .seafoods').addClass('unActive');
        $('.products-product .content .body .meets').addClass('unActive');

        $('.products-product .content .title .button .btn-all').removeClass('active');
        $('.products-product .content .title .button .btn-fruits').addClass('active');
        $('.products-product .content .title .button .btn-vegetables').removeClass('active');
        $('.products-product .content .title .button .btn-garlics').removeClass('active');
        $('.products-product .content .title .button .btn-seafoods').removeClass('active');
        $('.products-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.products-product .content .title .button .btn-vegetables').click(function(){
        $('.products-product .content .body .fruits').addClass('unActive');
        $('.products-product .content .body .vegetables').removeClass('unActive');
        $('.products-product .content .body .garlics').addClass('unActive');
        $('.products-product .content .body .seafoods').addClass('unActive');
        $('.products-product .content .body .meets').addClass('unActive');

        $('.products-product .content .title .button .btn-all').removeClass('active');
        $('.products-product .content .title .button .btn-fruits').removeClass('active');
        $('.products-product .content .title .button .btn-vegetables').addClass('active');
        $('.products-product .content .title .button .btn-garlics').removeClass('active');
        $('.products-product .content .title .button .btn-seafoods').removeClass('active');
        $('.products-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.products-product .content .title .button .btn-garlics').click(function(){
        $('.products-product .content .body .fruits').addClass('unActive');
        $('.products-product .content .body .vegetables').addClass('unActive');
        $('.products-product .content .body .garlics').removeClass('unActive');
        $('.products-product .content .body .seafoods').addClass('unActive');
        $('.products-product .content .body .meets').addClass('unActive');

        $('.products-product .content .title .button .btn-all').removeClass('active');
        $('.products-product .content .title .button .btn-fruits').removeClass('active');
        $('.products-product .content .title .button .btn-vegetables').removeClass('active');
        $('.products-product .content .title .button .btn-garlics').addClass('active');
        $('.products-product .content .title .button .btn-seafoods').removeClass('active');
        $('.products-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.products-product .content .title .button .btn-seafoods').click(function(){
        $('.products-product .content .body .fruits').addClass('unActive');
        $('.products-product .content .body .vegetables').addClass('unActive');
        $('.products-product .content .body .garlics').addClass('unActive');
        $('.products-product .content .body .seafoods').removeClass('unActive');
        $('.products-product .content .body .meets').addClass('unActive');

        $('.products-product .content .title .button .btn-all').removeClass('active');
        $('.products-product .content .title .button .btn-fruits').removeClass('active');
        $('.products-product .content .title .button .btn-vegetables').removeClass('active');
        $('.products-product .content .title .button .btn-garlics').removeClass('active');
        $('.products-product .content .title .button .btn-seafoods').addClass('active');
        $('.products-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.products-product .content .title .button .btn-meets').click(function(){
        $('.products-product .content .body .fruits').addClass('unActive');
        $('.products-product .content .body .vegetables').addClass('unActive');
        $('.products-product .content .body .garlics').addClass('unActive');
        $('.products-product .content .body .seafoods').addClass('unActive');
        $('.products-product .content .body .meets').removeClass('unActive');

        $('.products-product .content .title .button .btn-all').removeClass('active');
        $('.products-product .content .title .button .btn-fruits').removeClass('active');
        $('.products-product .content .title .button .btn-vegetables').removeClass('active');
        $('.products-product .content .title .button .btn-garlics').removeClass('active');
        $('.products-product .content .title .button .btn-seafoods').removeClass('active');
        $('.products-product .content .title .button .btn-meets').addClass('active');
    });
});

export default function ProductsProduct(){

    return(
    <section className="products-product" onClick={btnMenuDown}>
        <div className="content">
            <div className="title">
                <h2>NEW PRODUCTS</h2>
                <h6>- Featured Products - </h6>
                <div className="button">
                    <button className="btn-all active">All</button>
                    <button className="btn-fruits">Fruits</button>
                    <button className="btn-vegetables">Vegetables</button>
                    <button className="btn-garlics">Garlics</button>
                    <button className="btn-seafoods">SeaFoods</button>
                    <button className="btn-meets">Meets</button>
                </div>
            </div>
            <div className="body">

                <div className="produk fruits">
                    <div className="produk-img">
                        <img src={grape} alt="" />
                        <div className="menu">
                            <div className="circle" onclick="window.location.href='product-detail.html'">
                                <FiSearch color="white" size="24px"/> 
                            </div>
                            <div className="circle add-shopping">
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
                            <div className="circle" onclick="window.location.href='product-detail.html'">
                                <FiSearch color="white" size="24px"/> 
                            </div>
                            <div className="circle add-shopping">
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
                            <div className="circle" onclick="window.location.href='product-detail.html'">
                                <FiSearch color="white" size="24px"/> 
                            </div>
                            <div className="circle add-shopping">
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
                            <div className="circle" onclick="window.location.href='product-detail.html'">
                                <FiSearch color="white" size="24px"/> 
                            </div>
                            <div className="circle add-shopping">
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
                            <div className="circle" onclick="window.location.href='product-detail.html'">
                                <FiSearch color="white" size="24px"/> 
                            </div>
                            <div className="circle add-shopping">
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
                            <div className="circle" onclick="window.location.href='product-detail.html'">
                                <FiSearch color="white" size="24px"/> 
                            </div>
                            <div className="circle add-shopping">
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
                            <div className="circle" onclick="window.location.href='product-detail.html'">
                                <FiSearch color="white" size="24px"/> 
                            </div>
                            <div className="circle add-shopping">
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
                            <div className="circle" onclick="window.location.href='product-detail.html'">
                                <FiSearch color="white" size="24px"/> 
                            </div>
                            <div className="circle add-shopping">
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

                <div className="produk garlics">
                    <div className="produk-img">
                        <img src={garlic3} alt="" />
                        <div className="menu">
                            <div className="circle" onclick="window.location.href='product-detail.html'">
                                <FiSearch color="white" size="24px"/> 
                            </div>
                            <div className="circle add-shopping">
                                <FiShoppingCart color="white" size="24px"/>
                            </div>
                        </div>
                    </div>
                    <div className="produk-body">
                        <h4>Large Garlic</h4>
                        <hr />
                        <h6>$5.99</h6>
                    </div>
                </div>
                <div className="produk fruits">
                    <div className="produk-img">
                        <img src={lecy} alt="" />
                        <div className="menu">
                            <div className="circle" onclick="window.location.href='product-detail.html'">
                                <FiSearch color="white" size="24px"/> 
                            </div>
                            <div className="circle add-shopping">
                                <FiShoppingCart color="white" size="24px"/>
                            </div>
                        </div>
                    </div>
                    <div className="produk-body">
                        <h4>Lecy Fresh Fruit</h4>
                        <hr />
                        <h6>$8.99</h6>
                    </div>
                </div>
                <div className="produk vegetables">
                    <div className="produk-img">
                        <img src={chili} alt="" />
                        <div className="menu">
                            <div className="circle" onclick="window.location.href='product-detail.html'">
                                <FiSearch color="white" size="24px"/> 
                            </div>
                            <div className="circle add-shopping">
                                <FiShoppingCart color="white" size="24px"/>
                            </div>
                        </div>
                    </div>
                    <div className="produk-body">
                        <h4>Red Chili</h4>
                        <hr />
                        <h6>$7.99</h6>
                    </div>
                </div>
                <div className="produk vegetables">
                    <div className="produk-img">
                        <img src={squash} alt="" />
                        <div className="menu">
                            <div className="circle" onclick="window.location.href='product-detail.html'">
                                <FiSearch color="white" size="24px"/> 
                            </div>
                            <div className="circle add-shopping">
                                <FiShoppingCart color="white" size="24px"/>
                            </div>
                        </div>
                    </div>
                    <div className="produk-body">
                        <h4>Vegetable Squash</h4>
                        <hr />
                        <h6>$4.99</h6>
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
}