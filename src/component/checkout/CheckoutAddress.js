
import $ from 'jquery';
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
    $('.nav-search').removeClass('active');
    $('.navbar').removeClass('search-active');
}

export default function CheckoutAddress(){
    return(
    <section className="checkout-address" onClick={btnMenuDown}>
        <div className="content">
            <form action="">
                <div className="billing">
                    <div className="billing-head">
                        <h2>Billing Address</h2>
                    </div>
                    <div className="billing-body">
                        <div className="body-left">
                            <div className="form-group">
                                <label>First name *</label>
                                <input type="text" placeholder="" required />
                            </div>
                            <div className="form-group">
                                <label>Last name *</label>
                                <input type="text" placeholder="" required />
                            </div>
                            <div className="form-group">
                                <label>Company name (optional)</label>
                                <input type="text" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label>Phone *</label>
                                <input type="text" placeholder="" required />
                            </div>
                            <div className="form-group">
                                <label>Email address *</label>
                                <input type="text" placeholder="" required />
                            </div>
                        </div>
                        <div className="body-right">
                            <div className="form-group">
                                <label>Street address *</label>
                                <input type="text" placeholder="House number and street name" required />
                            </div>
                            <div className="form-group">
                                <label>Town / City *</label>
                                <input type="text" placeholder="" required />
                            </div>
                            <div className="form-group">
                                <label>Province *</label>
                                <input type="text" placeholder="" required />
                            </div>
                            <div className="form-group">
                                <label>Country *</label>
                                <input type="text" placeholder="" required />
                            </div>
                            <div className="form-group">
                                <label>Postcode / ZIP *</label>
                                <input type="text" placeholder="" required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="your-order">
                    <div className="your-order-head">
                        <h2>Your order</h2>
                    </div>
                    <div className="your-order-body">
                        <table>
                            <tr data-aos="fade-up" data-aos-duration="400">
                                <th>Product</th>
                                <th id="desktop">Subtotal</th>
                                <th id="mobile" style={{textAlign: "right"}}>Subtotal</th>
                            </tr>
                            <tr className="list-product" data-aos="fade-up" data-aos-duration="600">
                                <td style={{textAlign: "left"}}>Fresh Natherlands Lecy</td>
                                <td>$15.00</td>
                            </tr>
                            <tr data-aos="fade-up" data-aos-duration="800">
                                <th>Subtotal</th>
                                <td>$15.00</td>
                            </tr>
                            <tr data-aos="fade-up" data-aos-duration="1000">
                                <th>Shipping</th>
                                <td>Flat rate: $79.00</td>
                            </tr>
                            <tr data-aos="fade-up" data-aos-duration="1200">
                                <th>Total</th>
                                <td>$94.00</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className="payment">
                    <div className="payment-body">
                        <div className="form-group">
                            <input type="radio" name="radio" />
                            <div className="label">
                                <h4>Bank Transfer</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nobis maiores minima magni maxime accusamus</p>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="radio" name="radio" />
                            <div className="label">
                                <h4>Cash on delivery</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam repellat vel eveniet maxime</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="action">
                    <div className="action-head">
                        <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                    </div>
                    <div className="action-body">
                        <button type="submit" className="btn-place-order">Place order</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
    );
}