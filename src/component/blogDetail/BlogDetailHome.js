
import { FiCalendar, FiFacebook, FiFolder, FiInstagram, FiLinkedin, FiMessageSquare, FiTag, FiTwitter } from 'react-icons/fi';
import blog1 from '../../assets/images/blog-1.png';
import blog2 from '../../assets/images/blog-2.png';
import blog3 from '../../assets/images/blog-3.png';
import blog4 from '../../assets/images/blog-4.png';

import founder from '../../assets/images/founder.png'

import $ from 'jquery';

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
}

export default function BlogDetailHome(){
    return(
    <section class="blog-detail" onclick={btnMenuDown}>
        <div class="content">
            <div class="left">
                <div class="image-head">
                    <img src={blog4} alt="" />
                </div>
                <div class="information">
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
                <div class="main-title">
                    <h1>Is Buying Organic Healthier?</h1>
                </div>
                <div class="main-content">
                    <p>We’re typically conditioned to believe that organic food is better for us than conventional food, simply because. For many of us, the labelling used on organic food translates into the idea in our heads that it possesses qualities that contribute to our health in a way that regular foods don’t. In other words, they’re ‘super-foods’.</p>
                
                    <h4>Comparing nutrients</h4>

                    <p>Recently, a review of studies appearing in the British Journal of Nutrition came to the conclusion that organic food is richer in antioxidants than non-organic food. It is also said to be lower in a toxic mineral called cadmium. However, until this, the consensus developed by research said different.</p>

                    <div class="img-content">
                        <img src={blog3} alt="" />
                        <p>Fresh Natherlands Lecy</p>
                    </div>

                    <p>Clearly, more studies are required for researchers to come to a scientific accord. But as we’ll explore, the manner in which organic food is bought, sold and utilized, does create health opportunities of its own. What has now become conventional grocery shopping comes with its nutritional hazards.</p>

                    <p>Packaged ready meals, which adorn the shelves of supermarket shelves, offer convenience and apparently good value.</p>

                    <p>But they’re often much higher in added salt and sugar, and perhaps even more calorie-dense than a dish we’ll create in our own kitchen from scratch. Buying from organic farm shops typically entails buying fresh produce to cook meals ourselves, which is generally a healthier practice than eating packaged meals.</p>

                </div>
                <div class="main-footer">
                    <div class="tag">
                        <FiTag size="18px" color="#534741" />
                        <h4> fruits, petikdua store, vegetables</h4>
                    </div>
                    <div class="media-sosial">
                        <FiFacebook color="#534741" size="24px" onclick="window.location.href='https://www.facebook.com/alfian.prisma.yopiangga'"></FiFacebook>
                        <FiInstagram color="#534741" size="24px" onclick="window.location.href='https://www.instagram.com/alfian_prisma_yopiangga/'"></FiInstagram>
                        <FiTwitter color="#534741" size="24px" onclick="window.location.href='https://twitter.com/AlfianPrisma'"></FiTwitter>
                        <FiLinkedin color="#534741" size="24px" onclick="window.location.href='https://www.linkedin.com/in/alfian-prisma-yopiangga-a954251a8/'"></FiLinkedin>
                    </div>
                </div>

                <div class="comment-head">
                    <h3>Comment (4)</h3>
                </div>
                <div class="comment-body">
                    <div class="comment-1">
                        <div class="img">
                            <div class="circle">
                                <img src={founder} alt="" />
                            </div>
                        </div>
                        <div class="content-comment">
                            <div class="content-title">
                                <h4>Yopiangga</h4>
                                <h6>Desember 12, 2020</h6>
                            </div>
                            <div class="content-text">
                                <p>In addition to the above, which we might term as health benefits indirectly associated with organic food, the practices used in developing organic produce do make it healthier in direct terms too.</p>
                            </div>
                        </div>
                    </div>
                    <div class="comment-1">
                        <div class="img">
                            <div class="circle">
                                <img src={founder} alt="" />
                            </div>
                        </div>
                        <div class="content-comment">
                            <div class="content-title">
                                <h4>Yopiangga</h4>
                                <h6>Desember 12, 2020</h6>
                            </div>
                            <div class="content-text">
                                <p>In addition to the above, which we might term as health benefits indirectly associated with organic food, the practices used in developing organic produce do make it healthier in direct terms too.</p>
                            </div>
                        </div>
                    </div>
                    <div class="comment-1">
                        <div class="img">
                            <div class="circle">
                                <img src={founder} alt="" />
                            </div>
                        </div>
                        <div class="content-comment">
                            <div class="content-title">
                                <h4>Yopiangga</h4>
                                <h6>Desember 12, 2020</h6>
                            </div>
                            <div class="content-text">
                                <p>In addition to the above, which we might term as health benefits indirectly associated with organic food, the practices used in developing organic produce do make it healthier in direct terms too.</p>
                            </div>
                        </div>
                    </div>
                    <div class="comment-1">
                        <div class="img">
                            <div class="circle">
                                <img src={founder} alt="" />
                            </div>
                        </div>
                        <div class="content-comment">
                            <div class="content-title">
                                <h4>Yopiangga</h4>
                                <h6>Desember 12, 2020</h6>
                            </div>
                            <div class="content-text">
                                <p>In addition to the above, which we might term as health benefits indirectly associated with organic food, the practices used in developing organic produce do make it healthier in direct terms too.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="write-comment-head">
                    <h3>Leave your thought</h3>
                </div>
                <div class="write-comment-body">
                    <form action="">
                        <div class="form-group">
                            <input type="text" placeholder="Name*" />
                            <input type="text" placeholder="Email*" />
                            <input type="text" placeholder="Telephone" />
                        </div>
                        <div class="form-group">
                            <textarea rows="15" placeholder="Comment*"></textarea>
                        </div>
                        <button class="btn-send">SEND US NOW</button>
                    </form>
                </div>
            </div>
            <div class="right">
                <div class="search-bar">
                    <input type="text" placeholder="Search ..." />
                    <div class="icon">
                        <i data-feather="search" stroke="#534741"></i>   
                    </div>
                </div>
                <div class="categories-bar">
                    <h2>Categories</h2>
                    <div class="categories-name">
                        <div class="categories-list">
                            <h3>Dried Fruits</h3>
                            <h3>1</h3>
                        </div>
                        <div class="categories-list">
                            <h3>Fruits</h3>
                            <h3>1</h3>
                        </div>
                        <div class="categories-list">
                            <h3>Vegetables</h3>
                            <h3>1</h3>
                        </div>
                        <div class="categories-list">
                            <h3>Meets</h3>
                            <h3>1</h3>
                        </div>
                        <div class="categories-list">
                            <h3>Garlic</h3>
                            <h3>1</h3>
                        </div>
                        <div class="categories-list">
                            <h3>Seafoods</h3>
                            <h3>1</h3>
                        </div>
                    </div>
                    
                </div>
                <div class="popular-post-bar">
                    <h2>Popular Posts</h2>
                    <div class="card-blog" onclick="window.location.href='blog-detail.html'">
                        <div class="blog-img">
                            <img src={blog2} alt="" />
                        </div>
                        <div class="blog-body">
                            <h6>October 23, 2020</h6>
                            <h3>Become Heart Healthy in 5 Steps</h3>
                            <p>Improving your diet lowers your risk for heart…</p>
                            <h4><a href="">READ MORE</a></h4>
                        </div>
                    </div>
                    <div class="card-blog" onclick="window.location.href='blog-detail.html'">
                        <div class="blog-img">
                            <img src={blog3} alt="" />
                        </div>
                        <div class="blog-body">
                            <h6>October 23, 2020</h6>
                            <h3>Become Heart Healthy in 5 Steps</h3>
                            <p>Improving your diet lowers your risk for heart…</p>
                            <h4><a href="">READ MORE</a></h4>
                        </div>
                    </div>
                    <div class="card-blog" onclick="window.location.href='blog-detail.html'">
                        <div class="blog-img">
                            <img src={blog4} alt="" />
                        </div>
                        <div class="blog-body">
                            <h6>October 23, 2020</h6>
                            <h3>Become Heart Healthy in 5 Steps</h3>
                            <p>Improving your diet lowers your risk for heart…</p>
                            <h4><a href="">READ MORE</a></h4>
                        </div>
                    </div>
                </div>

                <div class="search-bytags-bar">
                    <h2>Search by Tags</h2>
                    <div class="btn-tag">
                        <button>food</button>
                        <button>fruits</button>
                        <button>vegetable</button>
                        <button>natural</button>
                        <button>meets</button>
                        <button>seafoods</button>
                    </div>
                    
                </div>

                <div class="search-bar">
                    <input type="text" placeholder="Search ..." />
                    <div class="icon">
                        <i data-feather="search" stroke="#534741"></i>   
                    </div>
                </div>

                <div class="recent-post-bar">
                    <h2>Recent Posts</h2>
                    <div class="card-blog" onclick="window.location.href='blog-detail.html'">
                        <div class="blog-img">
                            <img src={blog2} alt="" />
                        </div>
                        <div class="blog-body">
                            <h6>October 23, 2020</h6>
                            <h3>Become Heart Healthy in 5 Steps</h3>
                            <p>Improving your diet lowers your risk for heart…</p>
                            <h4><a href="">READ MORE</a></h4>
                        </div>
                    </div>
                    <div class="card-blog" onclick="window.location.href='blog-detail.html'">
                        <div class="blog-img">
                            <img src={blog3} alt="" />
                        </div>
                        <div class="blog-body">
                            <h6>October 23, 2020</h6>
                            <h3>Become Heart Healthy in 5 Steps</h3>
                            <p>Improving your diet lowers your risk for heart…</p>
                            <h4><a href="">READ MORE</a></h4>
                        </div>
                    </div>
                    <div class="card-blog" onclick="window.location.href='blog-detail.html'">
                        <div class="blog-img">
                            <img src={blog4} alt="" />
                        </div>
                        <div class="blog-body">
                            <h6>October 23, 2020</h6>
                            <h3>Become Heart Healthy in 5 Steps</h3>
                            <p>Improving your diet lowers your risk for heart…</p>
                            <h4><a href="">READ MORE</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}