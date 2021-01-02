
import React from 'react';

import NavSearch from '../component/all/NavSearch';
import Nav from '../component/all/Nav';
import NavMobile from '../component/all/NavMobile';
import CheckoutMain from '../component/checkout/CheckoutMain';
import CheckoutAddress from '../component/checkout/CheckoutAddress';
import Subscribe from '../component/all/Subscribe';
import Footer from '../component/all/Footer';

export default function Checkout(){
    return(
        <body>
        <NavSearch />
        <Nav />
        <NavMobile />
        <CheckoutMain />
        <CheckoutAddress />
        <Subscribe />
        <Footer />
        </body>
    );
}