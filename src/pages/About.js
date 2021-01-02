import React from 'react';

import NavSearch from '../component/all/NavSearch';
import Nav from '../component/all/Nav';
import NavMobile from '../component/all/NavMobile';
import AboutMain from '../component/about/AboutMain';
import AboutStory from '../component/about/AboutStory';
import AboutClient from '../component/about/AboutClient';
import Subscribe from '../component/all/Subscribe';
import Footer from '../component/all/Footer';




export default function About(){
  return (
    <body>
       <NavSearch />
       <Nav />
       <NavMobile />
       <AboutMain />
       <AboutStory />
       <AboutClient />
       <Subscribe />
       <Footer />
    </body>
  )
}

