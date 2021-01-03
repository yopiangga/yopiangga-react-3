
import $ from 'jquery';

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
    $('.nav-search').removeClass('active');
    $('.navbar').removeClass('search-active');
}

export default function ProductDetailMain(){
    return(
    <section className="section-intro" onClick={btnMenuDown}>
        <div className="content">
            <h2>PRODUCT DETAILS</h2>
            <p>Home / <span>Product Details</span></p>
        </div>
    </section>
    );
}