
import $ from 'jquery';
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
    $('.nav-search').removeClass('active');
    $('.navbar').removeClass('search-active');
}

export default function CartMain(){
    return(
    <section className="section-intro" onClick={btnMenuDown}>
        <div className="content">
            <h2>CART</h2>
            <p>Home / <span>Cart</span></p>
        </div>

    </section>
    );
}