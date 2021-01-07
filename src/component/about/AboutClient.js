import founder from '../../assets/images/founder.png';
import $ from 'jquery';
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
}

export default function AboutClient(){
    return(
        <section className="about-client" onClick={btnMenuDown}>
        <div className="content">
            <div className="title">
                <h2>We love our client</h2>
            </div>
            <div className="body">
                <div className="card-client">
                    <div className="review" data-aos="fade-up" data-aos-duration="400">
                        <span>"</span>
                        <p>Guttuss sunt sagas de pius ionicis tormento. Sunt capioes acquirere brevis, mirabilis fluctuses. Regius, alter lapsuss semper. Mirabilis fraticinida patienter imperiums luna est.</p>
                    </div>
                    <div className="regards" data-aos="fade-up" data-aos-duration="1000">
                        <div className="img">
                            <img src={founder} alt="" />
                        </div>
                        <div className="name">
                            <h3>ALFIAN PRISMA YOPIANGGA</h3>
                            <h4>FOUNDER PETIKDUA</h4>
                        </div>
                    </div>
                </div>
                <div className="card-client">
                    <div className="review" data-aos="fade-up" data-aos-duration="600">
                        <span>"</span>
                        <p>Barbatus fortiss ducunt ad poeta. Orexis dexter domus est. Glos, fermium, et demissio. Altus, germanus sectams tandem experientia</p>
                    </div>
                    <div className="regards" data-aos="fade-up" data-aos-duration="1200">
                        <div className="img">
                            <img src={founder} alt="" />
                        </div>
                        <div className="name">
                            <h3>ALFIAN PRISMA YOPIANGGA</h3>
                            <h4>FOUNDER PETIKDUA</h4>
                        </div>
                    </div>
                </div>
                <div className="card-client">
                    <div className="review" data-aos="fade-up" data-aos-duration="800">
                        <span>"</span>
                        <p>Est primus usus, cesaris. Azureus, fortis coordinataes sapienter magicae de raptus, germanus bursa. Peritus, nobilis buxums sed. Mirabilis fraticinida patienter imperiums luna est.</p>
                    </div>
                    <div className="regards" data-aos="fade-up" data-aos-duration="1400">
                        <div className="img">
                            <img src={founder} alt="" />
                        </div>
                        <div className="name">
                            <h3>ALFIAN PRISMA YOPIANGGA</h3>
                            <h4>FOUNDER PETIKDUA</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}