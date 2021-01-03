
import $ from 'jquery';

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
    $('.nav-search').removeClass('active');
    $('.navbar').removeClass('search-active');
}

export default function TestimonialMain(){
    return(
    <section className="section-intro" onClick={btnMenuDown}>
        <div className="content">
            <h2>TESTIMONIALS</h2>
            <p>Home / <span>Testimonials</span></p>
        </div>

    </section>
    );
}