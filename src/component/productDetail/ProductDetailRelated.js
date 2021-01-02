import { FiSearch, FiShoppingCart } from 'react-icons/fi';

import seafood2 from '../../assets/images/product/seafood2.png';
import orange from '../../assets/images/product/orange.png';
import tomato from '../../assets/images/product/tomato.png';
import garlic2 from '../../assets/images/product/garlic2.png';

export default function ProductDetailRelated(){
    return(
    <section className="product-detail-related">
        <div className="content">
            <div className="content-head">
                <h2>Related Poducts</h2>
            </div>
            <div className="content-body">
                <div className="produk vegetables">
                    <div className="produk-img">
                        <img src={seafood2} alt="" />
                        <div className="menu">
                            <div className="circle" onclick="window.location.href='product-detail.html'">
                                <FiSearch size="24px" color="#ffffff" /> 
                            </div>
                            <div className="circle add-shopping">
                                <FiShoppingCart size="24px" color="#ffffff" /> 
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
                            <div className="circle" onclick="window.location.href='product-detail.html'">
                                <FiSearch size="24px" color="#ffffff" /> 
                            </div>
                            <div className="circle add-shopping">
                                <FiShoppingCart size="24px" color="#ffffff" /> 
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
                                <FiSearch size="24px" color="#ffffff" /> 
                            </div>
                            <div className="circle add-shopping">
                                <FiShoppingCart size="24px" color="#ffffff" /> 
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
                            <div className="circle" onclick="window.location.href='product-detail.html'">
                                <FiSearch size="24px" color="#ffffff" /> 
                            </div>
                            <div className="circle add-shopping">
                                <FiShoppingCart size="24px" color="#ffffff" /> 
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