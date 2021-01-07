import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

import founder from '../../assets/images/user/user-1.png';

import $ from 'jquery';
import {NavLink} from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
    $('.nav-search').removeClass('active');
    $('.navbar').removeClass('search-active');
}

function meFacebook(){
    window.location.href='https://www.facebook.com/alfian.prisma.yopiangga';
}

function meInstagram(){
    window.location.href='https://www.instagram.com/alfian_prisma_yopiangga/';
}

function meTwitter(){
    window.location.href='https://twitter.com/AlfianPrisma';
}

function meLinkedin(){
    window.location.href='https://www.linkedin.com/in/alfian-prisma-yopiangga-a954251a8/';
}

export default function TestimonialClient(){
    return(
    <section className="testimonials-client" onClick={btnMenuDown}>
        <div className="content">
            <div className="title">
                <h2>What People Say</h2>
                <p>We are online food store organic farm delivering the best products that boost your daily life energy and potential.</p>
            </div>
            <div className="body" data-aos="fade-up" data-aos-duration="400">
                <div className="card-client">
                    <div className="review">
                        <span>"</span>
                        <p>Classis de salvus cursus, convertam galatae! Terror peregrinationes, tanquam audax cedrium. Cum luna prarere, omnes cannabises resuscitabo. Classis de salvus cursus, convertam galatae! Terror peregrinationes, tanquam audax cedrium.</p>
                    </div>
                    <div className="regards">
                        <div className="img">
                            <img src={founder} alt="" />
                        </div>
                        <div className="name">
                            <h3 data-aos="fade-up" data-aos-duration="600">JANES PETERSON</h3>
                            <h4 data-aos="fade-up" data-aos-duration="800">FOUNDER SHOPFRUITS</h4>
                        </div>
                    </div>
                    <div className="media-sosial">
                        <FiFacebook color="#8EB359" size="24px" onClick={meFacebook}></FiFacebook>
                        <FiInstagram color="#8EB359" size="24px" onClick={meInstagram}></FiInstagram>
                        <FiTwitter color="#8EB359" size="24px" onClick={meTwitter}></FiTwitter>
                        <FiLinkedin color="#8EB359" size="24px" onClick={meLinkedin}></FiLinkedin>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}