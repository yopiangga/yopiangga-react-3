import React from 'react';

import NavSearch from '../component/all/NavSearch';
import Nav from '../component/all/Nav';
import NavMobile from '../component/all/NavMobile';
import HomeMain from '../component/home/HomeMain';
import HomeCategory from '../component/home/HomeCategory';
import HomeWhy from '../component/home/HomeWhy';
import HomeProduct from '../component/home/HomeProduct';
import HomeBlog from '../component/home/HomeBlog';
import Subscribe from '../component/all/Subscribe';
import Footer from '../component/all/Footer';

document.title = "Petikdua - Online Food Store";

export default function Dashboard(){
  return (
    <div>
       <NavSearch />
       <Nav />
       <NavMobile />
       <HomeMain />
       <HomeCategory />
       <HomeWhy />
       <HomeProduct />
       <HomeBlog />
       <Subscribe />
       <Footer />
    </div>
  )
}

