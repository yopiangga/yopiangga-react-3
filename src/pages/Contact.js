import React from 'react';

import NavSearch from '../component/all/NavSearch';
import Nav from '../component/all/Nav';
import NavMobile from '../component/all/NavMobile';
import ContactMain from '../component/contact/ContactMain';
import ContactForm from '../component/contact/ContactForm';
import Subscribe from '../component/all/Subscribe';
import Footer from '../component/all/Footer';

    
export default function Contact(){
    return(
    <body>
       <NavSearch />
       <Nav />
       <NavMobile />
       <ContactMain />
       <ContactForm />
       <Subscribe />
       <Footer />
    </body>
    );
}