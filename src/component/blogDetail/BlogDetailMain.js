
import $ from 'jquery';

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
}

export default function BlogDetailMain(){
    return(
    <section className="section-intro" onClick={btnMenuDown}>
        <div className="content">
            <h2>BLOG DETAIL</h2>
            <p>Home / <span>Blog Detail</span></p>
        </div>

    </section>
    );
}