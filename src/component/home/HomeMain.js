import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {NavLink} from 'react-router-dom';

import $ from 'jquery';
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
    $('.nav-search').removeClass('active');
    $('.navbar').removeClass('search-active');
}

function btnLeft(){
    $('.home-intro .slide-1').addClass('active animate__animated animate__fadeIn');
    $('.home-intro .slide-2').removeClass('active');
}

function btnRight(){
    $('.home-intro .slide-1').removeClass('active');
    $('.home-intro .slide-2').addClass('active animate__animated animate__fadeIn');
}


function HomeMain() {
  return (
    <section className="home-intro" onClick={btnMenuDown}>
        <div className="btn-left" onClick={btnLeft}>
            <div className="icon-box">
                <FiChevronLeft size="24px" />
            </div>
        </div>
        <div className="slide slide-1 active">
            <div className="content">
                <h6>PETIKDUA - 2021</h6>
                <h2>Get Organic Food</h2>
                <p>With our wide variety of vegan & organic food products, 
                    <br></br>we are sure to help you make the right choice to start your day.</p>
                <NavLink exact to="/products"><button className="btn-shop" data-aos="fade-up" data-aos-duration="2000">SHOP NOW</button></NavLink>
            </div>
            <div className="icon-down">
                <div className="circle animate__animated animate__bounce"></div>
            </div>
        </div>
        <div className="slide slide-2">
            <div className="content">
                <h6>PETIKDUA - 2021</h6>
                <h2>Tasty Way to Healthier Life</h2>
                <p>Our organic food contains all necessary elements and vitamins for your health.</p>
                <NavLink exact to="/products"><button className="btn-shop" data-aos="fade-up" data-aos-duration="2000">SHOP NOW</button></NavLink>
            </div>
            <div className="icon-down">
                <div className="circle"></div>
            </div>
        </div>
        <div className="btn-right" onClick={btnRight}>
            <div className="icon-box">
                <FiChevronRight size="24px" />
            </div>
        </div>
    </section>
  );
}

export default HomeMain;
