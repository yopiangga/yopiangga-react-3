import $ from 'jquery';

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
}

export default function PersonalAddress(){
    return(
    <section className="personal-address" onClick={btnMenuDown}>
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

                <div className="edit-password">
                    <div className="edit-head">
                        <h2>Change Password</h2>
                    </div>
                    <div className="edit-body">
                        <div className="body-left">
                            <div className="form-group">
                                <label>Old Password</label>
                                <input type="password" placeholder="" required />
                            </div>
                            <div className="form-group">
                                <label>New Password</label>
                                <input type="password" placeholder="" required />
                            </div>
                            <div className="form-group">
                                <label>New Paasword</label>
                                <input type="password" placeholder="" required />
                            </div>
    
                        </div>
                    </div>
                </div>


                <div className="action">
                    <div className="action-head">
                        <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                    </div>
                    <div className="action-body">
                        <button type="submit" className="btn-place-order">Update</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
    );
}