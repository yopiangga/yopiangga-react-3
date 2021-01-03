import { FiShoppingCart } from 'react-icons/fi';

import productDetail1 from '../../assets/images/product-detail-1.png';
import productDetail2 from '../../assets/images/product-detail-2.png';
import productDetail3 from '../../assets/images/product-detail-3.png';
import productDetail4 from '../../assets/images/product-detail-4.png';
import productDetail5 from '../../assets/images/product-detail-5.png';

import $ from 'jquery';

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
    $('.nav-search').removeClass('active');
    $('.navbar').removeClass('search-active');
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
                    <img className="small-img-1" src={productDetail1} alt="" />
                    <img className="small-img-2" src={productDetail2} alt="" />
                    <img className="small-img-3" src={productDetail3} alt="" />
                    <img className="small-img-4" src={productDetail4} alt="" />
                    <img className="small-img-5" src={productDetail5} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Fresh Natherlands Lecy</h1>
                <h3>$15.00</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam necessitatibus unde natus amet reprehenderit ut error, atque eaque velit minima, porro consequuntur esse iure omnis.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam necessitatibus unde natus amet reprehenderit ut error, atque eaque velit minima, porro consequuntur esse iure omnis labore nemo dolor laboriosam nisi.</p>
                <form action="">
                    <div className="form-group">
                        <input type="text" placeholder="Quantity" />
                        <button className="btn-add-cart">
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