
import photo1 from '../../assets/images/photo-1.png';
import photo2 from '../../assets/images/photo-2.png';
import photo3 from '../../assets/images/photo-3.png';
import photo4 from '../../assets/images/photo-4.png';

import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

import $ from 'jquery';
import {NavLink} from 'react-router-dom';

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
    $('.nav-search').removeClass('active');
    $('.navbar').removeClass('search-active');
}

function gMaps(){
    window.location.href='https://g.page/yopiangga-web-app-design?share';
}

function telephone(){
    window.location.href='';
}

function email(){
    window.location.href='';
}

function website(){
    window.location.href='http://petikdua.store/'
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

function Footer(){
    return(
    <section className="footer" onClick={btnMenuDown}>
        <div className="content">
            <div className="body">
                <div className="contact">
                    <h4>Contact</h4>
                    <h6 onClick={gMaps}>Kediri, Jawa Timur - Indonesia</h6>
                    <h6 onClick={telephone}>0823 3041 0865</h6>
                    <h6 onClick={email}>yopiangga@petikdua.store</h6>
                    <h6 onClick={website}>www.petikdua.store</h6>
                    <div className="media-sosial" id="desktop">
                        <FiFacebook color="#8EB359" size="24px" onClick={meFacebook}></FiFacebook>
                        <FiInstagram color="#8EB359" size="24px" onClick={meInstagram}></FiInstagram>
                        <FiTwitter color="#8EB359" size="24px" onClick={meTwitter}></FiTwitter>
                        <FiLinkedin color="#8EB359" size="24px" onClick={meLinkedin}></FiLinkedin>
                    </div>
                </div>
                <div className="information">
                    <h4>Information</h4>
                    <NavLink to="/products" className="information-link"><h6>New Products</h6></NavLink>
                    <NavLink to="/products" className="information-link"><h6>Hot Products</h6></NavLink>
                    <NavLink to="/detail-blog" className="information-link"><h6>Our Blog</h6></NavLink>
                    <NavLink to="/about"  className="information-link"><h6>About Our Shop</h6></NavLink>                 
                </div>
                <div className="navigation">
                    <h4>Navigation</h4>
                    <NavLink to="/" className="navigation-link"><h6>Dashboard</h6></NavLink>
                    <NavLink to="/about" className="navigation-link"><h6>About Us</h6></NavLink>
                    <NavLink to="/products" className="navigation-link"><h6>Product</h6></NavLink>
                    <NavLink to="/testimonial" className="navigation-link"><h6>Testimonials</h6></NavLink>
                    <NavLink to="/contact" className="navigation-link"><h6>Contact</h6></NavLink>
                </div>
                <div className="photo">
                    <h4>Photo in Instagram</h4>
                    <div className="image">
                        <img src={photo1} alt="" />
                        <img src={photo2} alt="" />
                        <img src={photo3} alt="" />
                        <img src={photo4} alt="" />
                    </div>
                </div>
                <div className="media-sosial" id="mobile">
                    <FiFacebook color="#8EB359" size="24px" onClick={meFacebook}></FiFacebook>
                    <FiInstagram color="#8EB359" size="24px" onClick={meInstagram}></FiInstagram>
                    <FiTwitter color="#8EB359" size="24px" onClick={meTwitter}></FiTwitter>
                    <FiLinkedin color="#8EB359" size="24px" onClick={meLinkedin}></FiLinkedin>
                </div>
            </div>
            <div className="copyright">
                <h4>Copyright @ 2020 Petikdua - All Right Reserved</h4>
            </div>
        </div>
    </section>
    );
}


export default Footer;