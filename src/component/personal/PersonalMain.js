import {NavLink} from 'react-router-dom';

import $ from 'jquery';
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
    $('.nav-search').removeClass('active');
    $('.navbar').removeClass('search-active');
}

export default function PersonalMain(){
    return(
    <section className="section-intro" onClick={btnMenuDown}>
        <div className="content">
            <h2>PERSONAL INFORMATION</h2>
            <p>Home / <span>Personal Information</span></p>
            <NavLink to="authentication">
                <button className="btn-signout">Sign Out</button>
            </NavLink>
        </div>

    </section>
    );
}