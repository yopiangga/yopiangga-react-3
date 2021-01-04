
import $ from 'jquery';
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
}

   export default function AboutMain(){
        return(
        <section className="section-intro" onClick={btnMenuDown}>
            <div className="content">
                <h2>ABOUT US</h2>
                <p>Home / <span>About Us</span></p>
            </div>

        </section>
        );
    }