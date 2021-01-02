

import $ from 'jquery';

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
}


export default function ContactMain(){
    return(
    <section className="section-intro" onClick={btnMenuDown}>
        <div className="content">
            <h2>CONTACT</h2>
            <p>Home / <span>Contact</span></p>
        </div>

    </section>
    );
}