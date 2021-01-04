
import $ from 'jquery';
import {NavLink} from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
    $('.nav-search').removeClass('active');
    $('.navbar').removeClass('search-active');
}


export default function CartList(){
    return(
    <section className="list-cart" onClick={btnMenuDown}>
        <div className="content">
            <div className="content-head">
                <h2>Cart totals</h2>
            </div>
            <div className="content-body">
                <table>
                    <tr data-aos="fade-up" data-aos-duration="400">
                        <th>Sub total</th>
                        <td>$30.00</td>
                    </tr>
                    <tr data-aos="fade-up" data-aos-duration="600">
                        <th>Shipping</th>
                        <td>
                            <h4>Flat rate: $79.00</h4>
                            <h4>Shipping to Kediri</h4>
                            <a href="">Change address</a>
                        </td>
                    </tr>
                    <tr data-aos="fade-up" data-aos-duration="800">
                        <th>Total</th>
                        <td>$109.00</td>
                    </tr>
                    <tr style={{border: 0}}>
                        <td>
                            <NavLink exact to="/checkout">
                                <button className="btn-proceed-checkout">Proceed to checkout</button>
                            </NavLink>
                        </td>
                    </tr>
                </table>

            </div>
        </div>
    </section>
    );
}