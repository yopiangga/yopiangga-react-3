
import $ from 'jquery';

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
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