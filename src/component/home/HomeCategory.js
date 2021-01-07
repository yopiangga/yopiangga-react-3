

import fruits from '../../assets/images/fruit.png';
import vegetables from '../../assets/images/vegetable.png';
import seafoods from '../../assets/images/seafood.png';
import garlics from '../../assets/images/garlic.png';
import meets from '../../assets/images/meet.png';

import $ from 'jquery';
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
    $('.nav-search').removeClass('active');
    $('.navbar').removeClass('search-active');
}

function HomeCategory(){
    return (
            <section className="home-category" onClick={btnMenuDown}>
            <div className="content">
                <div className="title">
                    <h2>WELCOME TO PETIKDUA</h2>
                    <h6>- A food store -</h6>
                    <p>We are online food store industry organic farm delivering the best products that boost your daily life energy and potential.</p>
                </div>
                <div className="body">
                    <div className="category category-1" data-aos="fade-up" data-aos-duration="400">
                        <div className="category-img">
                            <img src={fruits} alt=""></img>
                        </div>
                        <div className="category-body">
                            <h5>Fruits</h5>
                            <h6>(9 items)</h6>
                        </div>
                    </div>
                    <div className="category category-2" data-aos="fade-up" data-aos-duration="600">
                        <div className="category-img">
                            <img src={vegetables} alt=""></img>
                        </div>
                        <div className="category-body">
                            <h5>Vegetables</h5>
                            <h6>(9 items)</h6>
                        </div>
                    </div>
                    <div className="category category-3" data-aos="fade-up" data-aos-duration="800">
                        <div className="category-img">
                            <img src={seafoods} alt=""></img>
                        </div>
                        <div className="category-body">
                            <h5>Sea foods</h5>
                            <h6>(9 items)</h6>
                        </div>
                    </div>
                    <div className="category category-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="category-img">
                            <img src={garlics} alt=""></img>
                        </div>
                        <div className="category-body">
                            <h5>Garlics</h5>
                            <h6>(9 items)</h6>
                        </div>
                    </div>
                    <div className="category category-5" data-aos="fade-up" data-aos-duration="1200">
                        <div className="category-img">
                            <img src={meets} alt=""></img>
                        </div>
                        <div className="category-body">
                            <h5>Meets</h5>
                            <h6>(9 items)</h6>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}


export default HomeCategory;