
import $ from 'jquery';

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
    $('.nav-search').removeClass('active');
    $('.navbar').removeClass('search-active');
}

export default function ProductsMain(){
    return(
    <section className="section-intro" onClick={btnMenuDown}>
        <div className="content">
            <h2>PRODUCTS</h2>
            <p>Home / <span>Products</span></p>
        </div>

    </section>
    );
}