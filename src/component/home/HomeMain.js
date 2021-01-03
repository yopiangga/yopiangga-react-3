import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {NavLink} from 'react-router-dom';

import $ from 'jquery';

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
                <h6>PETIKDUA - 2020</h6>
                <h2>FOOD STORE</h2>
                <p>1 Organie product grown with love</p>
                <NavLink exact to="/products"><button className="btn-shop">SHOP NOW</button></NavLink>
            </div>
            <div className="icon-down">
                <div className="circle animate__animated animate__bounce"></div>
            </div>
        </div>
        <div className="slide slide-2">
            <div className="content">
                <h6>PETIKDUA - 2020</h6>
                <h2>FOOD STORE</h2>
                <p>2 Organie product grown with love</p>
                <NavLink exact to="/products"><button className="btn-shop">SHOP NOW</button></NavLink>
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
