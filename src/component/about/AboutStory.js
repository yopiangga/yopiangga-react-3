import founder from '../../assets/images/founder.png';
import $ from 'jquery';

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
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam blanditiis repudiandae ex laboriosam esse iste.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam blanditiis repudiandae ex laboriosam esse iste. Vitae totam neque quis, repellat, ipsam magnam voluptate exercitationem, quaerat consectetur asperiores voluptates non quisquam?</p>
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