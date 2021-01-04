
import logo from '../../assets/images/logo.png';
import logoLight from '../../assets/images/logo-light.png';
import { FiFacebook, FiLinkedin, FiLock, FiMail } from 'react-icons/fi';
import {NavLink} from 'react-router-dom';

import $ from 'jquery';

function signUp(){
    $('.sign-in-sign-up .content').toggleClass('active');

    $('.sign-in-sign-up .content .content-left .sign-in').addClass('animate__animated animate__fadeInRight');
    $('.sign-in-sign-up .content .content-right .sign-up-2').addClass('animate__animated animate__fadeInLeft');
}

function signIn(){
    $('.sign-in-sign-up .content').toggleClass('active');

    $('.sign-in-sign-up .content .content-right .sign-up').addClass('animate__animated animate__fadeInLeft');
    $('.sign-in-sign-up .content .content-left .sign-in-2').addClass('animate__animated animate__fadeInRight');
}

export default function AuthMain(){
    return(
    <section className="sign-in-sign-up">
        <div className="content">
            <div className="content-left">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="logo-light">
                    <img src={logoLight} alt="" />
                </div>
                <div className="sign-in">
                    <h1>Sign in to Petik<span>dua</span></h1>
                    <div className="media-sosial">
                        <div className="circle">
                            <FiFacebook color="#7a7a7a" size="20px" />
                        </div>
                        <div className="circle">
                            <FiLinkedin color="#7a7a7a" size="20px" />
                        </div>
                    </div>
                    <p>or use your email account</p>
                    <form>
                        <div className="group">
                            <div className="group-icon">
                                <FiMail color="#7a7a7a" size="20px" />
                            </div>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="group">
                            <div className="group-icon">
                                <FiLock color="#7a7a7a" size="20px" />
                            </div>
                            <input type="password" placeholder="Password" />
                        </div>
                        <a href="">Forgot your password ?</a>
                        <NavLink exact to="/"> <button className="btn-sign-in">SIGN IN</button></NavLink> 
                    </form>
                </div>
                <div className="sign-in-2">
                    <h1>Hello, <span>Friend!</span></h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button className="btn-sign-in" onClick={signIn}>SIGN IN</button>
                </div>
            </div>



            <div className="content-right">
                <div className="sign-up">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal detail and start buying with us</p>
                    <button className="btn-sign-up" onClick={signUp}>SIGN UP</button>
                </div>

                <div className="sign-up-2">
                    <h1>Create Account Petik<span>dua</span></h1>
                    <div className="media-sosial">
                        <div className="circle">
                            <FiFacebook color="#7a7a7a" size="20px" />
                        </div>
                        <div className="circle">
                            <FiLinkedin color="#7a7a7a" size="20px" />
                        </div>
                    </div>
                    <p>or use your email for registration</p>
                    <form>
                        <div className="group">
                            <div className="group-icon">
                                <FiMail color="#7a7a7a" size="20px" />
                            </div>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="group">
                            <div className="group-icon">
                                <FiLock color="#7a7a7a" size="20px" />
                            </div>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="group">
                            <div className="group-icon">
                                <FiLock color="#7a7a7a" size="20px" />
                            </div>
                            <input type="password" placeholder="Repeat Password" />
                        </div>
                        <NavLink to="/"> <button className="btn-sign-up">SIGN UP</button></NavLink> 
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
}