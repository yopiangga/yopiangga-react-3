
import blog1 from '../../assets/images/blog-1.png';
import blog2 from '../../assets/images/blog-2.png';
import blog3 from '../../assets/images/blog-3.png';

import $ from 'jquery';
import {NavLink} from 'react-router-dom';

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
    $('.nav-search').removeClass('active');
    $('.navbar').removeClass('search-active');
}

function HomeBlog(){
    return (

    <section className="home-blog" onclick={btnMenuDown}>
        <div className="content">
            <div className="title">
                <h2>FROM OUR BLOG</h2>
                <h6>- Keep up to date with us -</h6>
            </div>
            <div className="body">
                <div className="blog-left">
                    <NavLink exact to="/blog-detail">
                    <div className="card-blog" >
                        <div className="blog-img">
                            <div className="frame"></div>
                            <img src={blog1} alt="" />
                        </div>
                        <div className="blog-body">
                            <h6>October 23, 2020</h6>
                            <h3>Become Heart Healthy in 5 Steps</h3>
                            <p>Improving your diet lowers your risk for heart…</p>
                            <h4><a href="">READ MORE</a></h4>
                        </div>
                    </div>      
                    </NavLink>
                </div>

                <div className="blog-right">
                    <NavLink exact to="/blog-detail">
                    <div className="card-blog" >
                        <div className="blog-img">
                            <img src={blog2} alt="" />
                        </div>
                        <div className="blog-body">
                            <h6>October 23, 2020</h6>
                            <h3>Become Heart Healthy in 5 Steps</h3>
                            <p>Improving your diet lowers your risk for heart…</p>
                            <h4><a href="">READ MORE</a></h4>
                        </div>
                    </div>      
                    </NavLink>

                    <NavLink exact to="/blog-detail">
                    <div className="card-blog" >
                        <div className="blog-img">
                            <img src={blog3} alt="" />
                        </div>
                        <div className="blog-body">
                            <h6>October 23, 2020</h6>
                            <h3>Become Heart Healthy in 5 Steps</h3>
                            <p>Improving your diet lowers your risk for heart…</p>
                            <h4><a href="">READ MORE</a></h4>
                        </div>
                    </div>      
                    </NavLink>
                </div>
            </div>
        </div>
    </section>

    );
}


export default HomeBlog;