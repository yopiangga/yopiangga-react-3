import React from 'react';

import NavSearch from '../component/all/NavSearch';
import Nav from '../component/all/Nav';
import NavMobile from '../component/all/NavMobile';
import ProductsMain from '../component/products/ProductsMain';
import ProductsProduct from '../component/products/ProductsProduct';
import Subscribe from '../component/all/Subscribe';
import Footer from '../component/all/Footer';


export default function Products(){
  return (
    <body>
       <NavSearch />
       <Nav />
       <NavMobile />
       <ProductsMain />
       <ProductsProduct />
       <Subscribe />
       <Footer />
    </body>
  )
}