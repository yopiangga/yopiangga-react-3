
import $ from 'jquery';

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
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