import React from 'react';

import NavSearch from '../component/all/NavSearch';
import Nav from '../component/all/Nav';
import NavMobile from '../component/all/NavMobile';
import BlogDetailMain from '../component/blogDetail/BlogDetailMain';
import BlogDetailHome from '../component/blogDetail/BlogDetailHome';
import Subscribe from '../component/all/Subscribe';
import Footer from '../component/all/Footer';


export default function BlogDetail(){
    return(
    <div>
        <NavSearch />
        <Nav />
        <NavMobile />
        <BlogDetailMain />
        <BlogDetailHome />
        <Subscribe />
        <Footer />
    </div>
    );
}