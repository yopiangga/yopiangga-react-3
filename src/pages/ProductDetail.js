import React from 'react';

import NavSearch from '../component/all/NavSearch';
import Nav from '../component/all/Nav';
import NavMobile from '../component/all/NavMobile';
import ProductDetailMain from '../component/productDetail/ProductDetailMain';
import ProductDetailHome from '../component/productDetail/ProductDetailHome';
import ProductDetailRelated from '../component/productDetail/ProductDetailRelated';
import Subscribe from '../component/all/Subscribe';
import Footer from '../component/all/Footer';

document.title = "Product Detail - Petikdua Store";

export default function ProductDetail(){
    return(
    <div>
        <NavSearch />
        <Nav />
        <NavMobile />
        <ProductDetailMain />
        <ProductDetailHome />
        <ProductDetailRelated />
        <Subscribe />
        <Footer />
    </div>
    );
}