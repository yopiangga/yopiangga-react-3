import React from 'react';

import NavSearch from '../component/all/NavSearch';
import Nav from '../component/all/Nav';
import NavMobile from '../component/all/NavMobile';
import PersonalMain from '../component/personal/PersonalMain';
import PersonalAddress from '../component/personal/PersonalAddress';
import Subscribe from '../component/all/Subscribe';
import Footer from '../component/all/Footer';

export default function Personal(){
    return(
    <body>
        <NavSearch />
        <Nav />
        <NavMobile />
        <PersonalMain />
        <PersonalAddress />
        <Subscribe />
        <Footer />
    </body>
    );
}