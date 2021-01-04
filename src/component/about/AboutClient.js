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
                </div>
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
                </div>
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
                </div>
            </div>
        </div>
        </section>
    );
}