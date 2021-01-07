import founder from '../../assets/images/founder.png';
import $ from 'jquery';
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
}

export default function AboutStory(){
    return (
        <section className="about-story" onClick={btnMenuDown}>
        <div className="content">
            <div className="card-story">
                <div className="frame">
                    <div className="title">
                        <h2>OUR STORY</h2>
                        <h6>- Discover our beautiful farm -</h6>
                    </div>
                    <div className="body">
                        <p>A falsis, historia primus gallus. Est bassus tabes, cesaris. Gallus de mirabilis agripeta, locus mens! Primus ratione Cur eleates accelerare? Heu. Ecce, superbus onus! Demolitione secundus homo est. Cum cacula congregabo, omnes coordinataees acquirere dexter, flavum galataees.</p>
                        <p>Vae. Dexter fiscina aliquando vitares animalis est. Nunquam convertam bulla. Cum pars prarere, omnes seculaes</p>
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
                </div>
            </div>
        </div>
        </section>
    );
}