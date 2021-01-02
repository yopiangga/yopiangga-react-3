import React from 'react';

import NavSearch from '../component/all/NavSearch';
import Nav from '../component/all/Nav';
import NavMobile from '../component/all/NavMobile';
import CartMain from '../component/cart/CartMain';
import CartTable from '../component/cart/CartTable';
import CartList from '../component/cart/CartList';
import Subscribe from '../component/all/Subscribe';
import Footer from '../component/all/Footer';

export default function Cart(){
    return(
    <body>
       <NavSearch />
       <Nav />
       <NavMobile />
       <CartMain />
       <CartTable />
       <CartList />
       <Subscribe />
       <Footer />
    </body>
    );
}