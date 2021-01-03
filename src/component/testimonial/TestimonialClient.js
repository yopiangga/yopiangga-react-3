import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

import founder from '../../assets/images/founder.png';

import $ from 'jquery';
import {NavLink} from 'react-router-dom';

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
    <section className="testimonials-client" onclick={btnMenuDown}>
        <div className="content">
            <div className="title">
                <h2>The client said</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="body">
                <div className="card-client">
                    <div className="review">
                        <span>"</span>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptas, explicabo sint esse laborum ea omnis quibusdam harum recusandae. Dolorem aperiam nostrum hic est illum asperiore</p>
                    </div>
                    <div className="regards">
                        <div className="img">
                            <img src={founder} alt="" />
                        </div>
                        <div className="name">
                            <h3>ALFIAN PRISMA YOPIANGGA</h3>
                            <h4>FOUNDER PETIKDUA</h4>
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