
import { FiCalendar, FiFacebook, FiFolder, FiInstagram, FiLinkedin, FiMessageSquare, FiTag, FiTwitter } from 'react-icons/fi';
import blog1 from '../../assets/images/blog-1.png';
import blog2 from '../../assets/images/blog-2.png';
import blog3 from '../../assets/images/blog-3.png';
import blog4 from '../../assets/images/blog-4.png';

import founder from '../../assets/images/founder.png'

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

export default function BlogDetailHome(){
    return(
    <section className="blog-detail" onClick={btnMenuDown}>
        <div className="content">
            <div className="left">
                <div className="image-head">
                    <img src={blog4} alt="" />
                </div>
                <div className="information">
                    <ul>
                        <li>
                            <FiCalendar size="18px" />
                            <h6>Desember 12, 2020</h6>
                        </li>
                        <li>
                            <FiFolder size="18px" />
                            <h6>Fruits, Lecy, Fresh</h6>
                        </li>
                        <li>
                            <FiMessageSquare size="18px" />
                            <h6>4</h6>
                        </li>
                    </ul>
                </div>
                <div className="main-title">
                    <h1>Is Buying Organic Healthier?</h1>
                </div>
                <div className="main-content">
                    <p>We’re typically conditioned to believe that organic food is better for us than conventional food, simply because. For many of us, the labelling used on organic food translates into the idea in our heads that it possesses qualities that contribute to our health in a way that regular foods don’t. In other words, they’re ‘super-foods’.</p>
                
                    <h4>Comparing nutrients</h4>

                    <p>Recently, a review of studies appearing in the British Journal of Nutrition came to the conclusion that organic food is richer in antioxidants than non-organic food. It is also said to be lower in a toxic mineral called cadmium. However, until this, the consensus developed by research said different.</p>

                    <div className="img-content">
                        <img src={blog3} alt="" />
                        <p>Fresh Natherlands Lecy</p>
                    </div>

                    <p>Clearly, more studies are required for researchers to come to a scientific accord. But as we’ll explore, the manner in which organic food is bought, sold and utilized, does create health opportunities of its own. What has now become conventional grocery shopping comes with its nutritional hazards.</p>

                    <p>Packaged ready meals, which adorn the shelves of supermarket shelves, offer convenience and apparently good value.</p>

                    <p>But they’re often much higher in added salt and sugar, and perhaps even more calorie-dense than a dish we’ll create in our own kitchen from scratch. Buying from organic farm shops typically entails buying fresh produce to cook meals ourselves, which is generally a healthier practice than eating packaged meals.</p>

                </div>
                <div className="main-footer">
                    <div className="tag">
                        <FiTag size="18px" color="#333333" />
                        <h4> fruits, petikdua store, vegetables</h4>
                    </div>
                    <div className="media-sosial">
                        <FiFacebook color="#333333" size="24px" onClick={meFacebook}></FiFacebook>
                        <FiInstagram color="#333333" size="24px" onClick={meInstagram}></FiInstagram>
                        <FiTwitter color="#333333" size="24px" onClick={meTwitter}></FiTwitter>
                        <FiLinkedin color="#333333" size="24px" onClick={meLinkedin}></FiLinkedin>
                    </div>
                </div>

                <div className="comment-head">
                    <h3>Comment (4)</h3>
                </div>
                <div className="comment-body">
                    <div className="comment-1">
                        <div className="img">
                            <div className="circle">
                                <img src={founder} alt="" />
                            </div>
                        </div>
                        <div className="content-comment">
                            <div className="content-title">
                                <h4>Yopiangga</h4>
                                <h6>Desember 29, 2020</h6>
                            </div>
                            <div className="content-text">
                                <p>In addition to the above, which we might term as health benefits indirectly associated with organic food, the practices used in developing organic produce do make it healthier in direct terms too.</p>
                            </div>
                        </div>
                    </div>
                    <div className="comment-1">
                        <div className="img">
                            <div className="circle">
                                <img src={founder} alt="" />
                            </div>
                        </div>
                        <div className="content-comment">
                            <div className="content-title">
                                <h4>Zarff Regarzh</h4>
                                <h6>Desember 27, 2020</h6>
                            </div>
                            <div className="content-text">
                                <p>Capios persuadere in oenipons! Hercle, sensorem peritus!, bassus poeta! Solem de bi-color competition, gratia resistentia! Ubi est gratis silva?</p>
                            </div>
                        </div>
                    </div>
                    <div className="comment-1">
                        <div className="img">
                            <div className="circle">
                                <img src={founder} alt="" />
                            </div>
                        </div>
                        <div className="content-comment">
                            <div className="content-title">
                                <h4>Steppen Williem</h4>
                                <h6>January 12, 2021</h6>
                            </div>
                            <div className="content-text">
                                <p>In addition to the above, which we might term as health benefits indirectly associated with organic food, the practices used in developing organic produce do make it healthier in direct terms too.</p>
                            </div>
                        </div>
                    </div>
                    <div className="comment-1">
                        <div className="img">
                            <div className="circle">
                                <img src={founder} alt="" />
                            </div>
                        </div>
                        <div className="content-comment">
                            <div className="content-title">
                                <h4>Joon Peter Both</h4>
                                <h6>January 04, 2021</h6>
                            </div>
                            <div className="content-text">
                                <p>Nunquam transferre ignigena. Verpa noceres, tanquam festus zirbus. A falsis, barcas peritus calcaria. Humani generiss messis! Eheu, noster bubo! Cum musa credere, omnes lacteaes</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="write-comment-head">
                    <h3>Leave your thought</h3>
                </div>
                <div className="write-comment-body">
                    <form action="">
                        <div className="form-group">
                            <input type="text" placeholder="Name*" required/>
                            <input type="text" placeholder="Email*" required/>
                            <input type="text" placeholder="Telephone" />
                        </div>
                        <div className="form-group">
                            <textarea rows="15" placeholder="Comment*" required></textarea>
                        </div>
                        <button className="btn-send">SEND US NOW</button>
                    </form>
                </div>
            </div>
            <div className="right">
                <div className="search-bar">
                    <input type="text" placeholder="Search ..." />
                    <div className="icon">
                        <i data-feather="search" stroke="#534741"></i>   
                    </div>
                </div>
                <div className="categories-bar">
                    <h2>Categories</h2>
                    <div className="categories-name">
                        <div className="categories-list">
                            <h3>Dried Fruits</h3>
                            <h3>1</h3>
                        </div>
                        <div className="categories-list">
                            <h3>Fruits</h3>
                            <h3>1</h3>
                        </div>
                        <div className="categories-list">
                            <h3>Vegetables</h3>
                            <h3>1</h3>
                        </div>
                        <div className="categories-list">
                            <h3>Meets</h3>
                            <h3>1</h3>
                        </div>
                        <div className="categories-list">
                            <h3>Garlic</h3>
                            <h3>1</h3>
                        </div>
                        <div className="categories-list">
                            <h3>Seafoods</h3>
                            <h3>1</h3>
                        </div>
                    </div>
                    
                </div>
                <div className="popular-post-bar">
                    <h2>Popular Posts</h2>
                    <div className="card-blog">
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
                    <div className="card-blog">
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
                    <div className="card-blog">
                        <div className="blog-img">
                            <img src={blog4} alt="" />
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

                <div className="search-bytags-bar">
                    <h2>Search by Tags</h2>
                    <div className="btn-tag">
                        <button>food</button>
                        <button>fruits</button>
                        <button>vegetable</button>
                        <button>natural</button>
                        <button>meets</button>
                        <button>seafoods</button>
                    </div>
                    
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Search ..." />
                    <div className="icon">
                        <i data-feather="search" stroke="#534741"></i>   
                    </div>
                </div>

                <div className="recent-post-bar">
                    <h2>Recent Posts</h2>
                    <div className="card-blog">
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
                    <div className="card-blog">
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
                    <div className="card-blog">
                        <div className="blog-img">
                            <img src={blog4} alt="" />
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