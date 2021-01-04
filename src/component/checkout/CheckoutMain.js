
import $ from 'jquery';
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
    $('.nav-search').removeClass('active');
    $('.navbar').removeClass('search-active');
}

export default function CheckoutMain(){
    return(
    <section className="section-intro" onClick={btnMenuDown}>
        <div className="content">
            <h2>CHECKOUT</h2>
            <p>Home / <span>Checkout</span></p>
        </div>

    </section>
    );
}