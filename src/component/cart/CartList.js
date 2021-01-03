
import $ from 'jquery';
import {NavLink} from 'react-router-dom';


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
                    <tr>
                        <th>Sub total</th>
                        <td>$30.00</td>
                    </tr>
                    <tr>
                        <th>Shipping</th>
                        <td>
                            <h4>Flat rate: $79.00</h4>
                            <h4>Shipping to Kediri</h4>
                            <a href="">Change address</a>
                        </td>
                    </tr>
                    <tr>
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