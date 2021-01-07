import React from 'react';

import NavSearch from '../component/all/NavSearch';
import Nav from '../component/all/Nav';
import NavMobile from '../component/all/NavMobile';
import TestimonialMain from '../component/testimonial/TestimonialMain';
import TestimonialClient from '../component/testimonial/TestimonialClient';
import Subscribe from '../component/all/Subscribe';
import Footer from '../component/all/Footer';

document.title = "Testimonial - Petikdua Store";

export default function Testimonial(){
  return (
    <div>
       <NavSearch />
       <Nav />
       <NavMobile />
       <TestimonialMain />
       <TestimonialClient />
       <Subscribe />
       <Footer />
    </div>
  )
}