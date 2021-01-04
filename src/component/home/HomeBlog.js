
import blog1 from '../../assets/images/blog-1.png';
import blog2 from '../../assets/images/blog-2.png';
import blog3 from '../../assets/images/blog-3.png';

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

function HomeBlog(){
    return (

    <section className="home-blog" onClick={btnMenuDown}>
        <div className="content">
            <div className="title">
                <h2>FROM OUR BLOG</h2>
                <h6>- Keep up to date with us -</h6>
            </div>
            <div className="body">
                <div className="blog-left">
                    <div className="card-blog" data-aos="fade-up" data-aos-duration="400">
                        <div className="blog-img">
                            <div className="frame"></div>
                            <img src={blog1} alt="" />
                        </div>
                        <div className="blog-body">
                            <h6>October 23, 2020</h6>
                            <h3>Become Heart Healthy in 5 Steps</h3>
                            <p>Improving your diet lowers your risk for heart…</p>
                            <NavLink exact to="/blog-detail">
                                <h4><a href="">READ MORE</a></h4>
                            </NavLink>
                        </div>
                    </div>      
                </div>

                <div className="blog-right">
                    <div className="card-blog" data-aos="fade-up" data-aos-duration="600">
                        <div className="blog-img">
                            <img src={blog2} alt="" />
                        </div>
                        <div className="blog-body">
                            <h6>October 23, 2020</h6>
                            <h3>Become Heart Healthy in 5 Steps</h3>
                            <p>Improving your diet lowers your risk for heart…</p>
                            <NavLink exact to="/blog-detail">
                                <h4><a href="">READ MORE</a></h4>
                            </NavLink>
                        </div>
                    </div>      

                    <div className="card-blog" data-aos="fade-up" data-aos-duration="800">
                        <div className="blog-img">
                            <img src={blog3} alt="" />
                        </div>
                        <div className="blog-body">
                            <h6>October 23, 2020</h6>
                            <h3>Become Heart Healthy in 5 Steps</h3>
                            <p>Improving your diet lowers your risk for heart…</p>
                            <NavLink exact to="/blog-detail">
                                <h4><a href="">READ MORE</a></h4>
                            </NavLink>
                        </div>
                    </div>      
                </div>
            </div>
        </div>
    </section>

    );
}


export default HomeBlog;