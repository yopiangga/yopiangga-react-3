
import leaves1 from '../../assets/images/leaves-01.png';
import leaves2 from '../../assets/images/leaves-02.png';
import fruitLemon from '../../assets/images/fruit-lemon.png';

import $ from 'jquery';
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
    $('.nav-search').removeClass('active');
    $('.navbar').removeClass('search-active');
}

function HomeWhy(){
    return(
    <section className="home-why" onClick={btnMenuDown}>
        <div className="bg-left">
            <img src={leaves1} alt=""/>
        </div>
        <div className="bg-why">
            <div className="content">
                <div className="content-center mobile" id="mobile">
                    <div className="title">
                        <h2>Why</h2>
                        <h3>Choose</h3>
                        <h2>Petikdua</h2>
                    </div>
                    <div className="body">
                        <img src={fruitLemon} alt=""/>
                    </div>
                </div>
                <div className="content-left">
                    <div className="card-content card-content-1" data-aos="flip-right" data-aos-duration="400">
                        <h4>Eat More Healthfully</h4>
                        <p>Obtaining the recommended daily fruits and vegetables</p>
                    </div>
                    <div className="card-content card-content-2" data-aos="flip-right" data-aos-duration="800">
                        <h4>Eat More Healthfully</h4>
                        <p>Obtaining the recommended daily fruits and vegetables</p>
                    </div>
                </div>
                <div className="content-center desktop" id="desktop">
                    <div className="title">
                        <h2>Why</h2>
                        <h3>Choose</h3>
                        <h2>Petikdua</h2>
                    </div>
                    <div className="body">
                        <img src={fruitLemon} alt=""/>
                    </div>
                </div>
                <div className="content-right">
                    <div className="card-content card-content-2" data-aos="flip-left" data-aos-duration="600">
                        <h4>Eat More Healthfully</h4>
                        <p>Obtaining the recommended daily fruits and vegetables</p>
                    </div>
                    <div className="card-content card-content-1" data-aos="flip-left" data-aos-duration="1000">
                        <h4>Eat More Healthfully</h4>
                        <p>Obtaining the recommended daily fruits and vegetables</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-right">
            <img src={leaves2} alt=""/>
        </div>
    </section>
    );
}

export default HomeWhy;