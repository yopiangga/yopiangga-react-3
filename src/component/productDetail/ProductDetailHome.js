import { FiShoppingCart } from 'react-icons/fi';

import productDetail1 from '../../assets/images/product-detail-1.png';
import productDetail2 from '../../assets/images/product-detail-2.png';
import productDetail3 from '../../assets/images/product-detail-3.png';
import productDetail4 from '../../assets/images/product-detail-4.png';
import productDetail5 from '../../assets/images/product-detail-5.png';

import $ from 'jquery';
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
    $('.nav-search').removeClass('active');
    $('.navbar').removeClass('search-active');
}

function productImage1(){
    $('.product-detail-home .content .left .big-img .big-img-1').addClass('active');
    $('.product-detail-home .content .left .big-img .big-img-2').removeClass('active');
    $('.product-detail-home .content .left .big-img .big-img-3').removeClass('active');
    $('.product-detail-home .content .left .big-img .big-img-4').removeClass('active');
    $('.product-detail-home .content .left .big-img .big-img-5').removeClass('active');
}

function productImage2(){
    $('.product-detail-home .content .left .big-img .big-img-1').removeClass('active');
    $('.product-detail-home .content .left .big-img .big-img-2').addClass('active');
    $('.product-detail-home .content .left .big-img .big-img-3').removeClass('active');
    $('.product-detail-home .content .left .big-img .big-img-4').removeClass('active');
    $('.product-detail-home .content .left .big-img .big-img-5').removeClass('active');
}

function productImage3(){
    $('.product-detail-home .content .left .big-img .big-img-1').removeClass('active');
    $('.product-detail-home .content .left .big-img .big-img-2').removeClass('active');
    $('.product-detail-home .content .left .big-img .big-img-3').addClass('active');
    $('.product-detail-home .content .left .big-img .big-img-4').removeClass('active');
    $('.product-detail-home .content .left .big-img .big-img-5').removeClass('active'); 
}

function productImage4(){
    $('.product-detail-home .content .left .big-img .big-img-1').removeClass('active');
    $('.product-detail-home .content .left .big-img .big-img-2').removeClass('active');
    $('.product-detail-home .content .left .big-img .big-img-3').removeClass('active');
    $('.product-detail-home .content .left .big-img .big-img-4').addClass('active');
    $('.product-detail-home .content .left .big-img .big-img-5').removeClass('active');
}

function productImage5(){
    $('.product-detail-home .content .left .big-img .big-img-1').removeClass('active');
    $('.product-detail-home .content .left .big-img .big-img-2').removeClass('active');
    $('.product-detail-home .content .left .big-img .big-img-3').removeClass('active');
    $('.product-detail-home .content .left .big-img .big-img-4').removeClass('active');
    $('.product-detail-home .content .left .big-img .big-img-5').addClass('active');
}

function addShopping(){
    $('nav .content .icon .cart .notif').addClass('animate__animated animate__bounce').delay(500);
    setTimeout(function(){
        $('nav .content .icon .cart .notif').removeClass('animate__animated animate__bounce');
    }, 1000);
}

export default function ProductDetailHome(){
    return(
    <section className="product-detail-home" onClick={btnMenuDown}>
        <div className="content">
            <div className="left">
                <div className="big-img">
                    <img className="big-img-1 active" src={productDetail1} alt="" />
                    <img className="big-img-2" src={productDetail2} alt="" />
                    <img className="big-img-3" src={productDetail3} alt="" />
                    <img className="big-img-4" src={productDetail4} alt="" />
                    <img className="big-img-5" src={productDetail5} alt="" />
                </div>
                <div className="small-img">
                    <img className="small-img-1" src={productDetail1} alt="" onClick={productImage1} />
                    <img className="small-img-2" src={productDetail2} alt="" onClick={productImage2} />
                    <img className="small-img-3" src={productDetail3} alt="" onClick={productImage3} />
                    <img className="small-img-4" src={productDetail4} alt="" onClick={productImage4} />
                    <img className="small-img-5" src={productDetail5} alt="" onClick={productImage5} />
                </div>
            </div>
            <div className="right">
                <h1>Fresh Natherlands Lecy</h1>
                <h3>$15.00</h3>
                <p>Cur abaculus ire? Exsul secundus historia est. Hilotaes persuadere! Est teres exemplar, cesaris. Altus hydras ducunt ad repressor. Pol, animalis! Rationes sunt abactors de ferox ignigena. Nunquam imperium cannabis.</p>
                <p> Hercle, magister audax!, hibrida! Accentors studere, tanquam mirabilis tumultumque. Vae, barbatus detrius!</p>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Quantity" />
                        <button className="btn-add-cart" type="button" onClick={addShopping}>
                            <FiShoppingCart size="24px" color="#ffffff"/>
                        </button>
                    </div>
                </form>
                <h4>SKU : <span>001</span></h4>
                <h4>Category : <span>Fruits</span></h4>
                <h4>Tag : <span>Fruits</span>, <span>Natherlands</span>, <span>Lecy</span></h4>
            </div>
        </div>
    </section>
    );
}