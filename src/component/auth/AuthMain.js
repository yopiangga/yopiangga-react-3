
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
    <section class="sign-in-sign-up">
        <div class="content">
            <div class="content-left">
                <div class="logo">
                    <img src={logo} alt="" />
                </div>
                <div class="logo-light">
                    <img src={logoLight} alt="" />
                </div>
                <div class="sign-in">
                    <h1>Sign in to Petik<span>dua</span></h1>
                    <div class="media-sosial">
                        <div class="circle">
                            <FiFacebook color="#7a7a7a" size="20px" />
                        </div>
                        <div class="circle">
                            <FiLinkedin color="#7a7a7a" size="20px" />
                        </div>
                    </div>
                    <p>or use your email account</p>
                    <form>
                        <div class="group">
                            <div class="group-icon">
                                <FiMail color="#7a7a7a" size="20px" />
                            </div>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div class="group">
                            <div class="group-icon">
                                <FiLock color="#7a7a7a" size="20px" />
                            </div>
                            <input type="password" placeholder="Password" />
                        </div>
                        <a href="">Forgot your password ?</a>
                        <NavLink exact to="/"> <button className="btn-sign-in">SIGN IN</button></NavLink> 
                    </form>
                </div>
                <div class="sign-in-2">
                    <h1>Hello, <span>Friend!</span></h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button class="btn-sign-in" onClick={signIn}>SIGN IN</button>
                </div>
            </div>



            <div class="content-right">
                <div class="sign-up">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal detail and start buying with us</p>
                    <button class="btn-sign-up" onClick={signUp}>SIGN UP</button>
                </div>

                <div class="sign-up-2">
                    <h1>Create Account Petik<span>dua</span></h1>
                    <div class="media-sosial">
                        <div class="circle">
                            <FiFacebook color="#7a7a7a" size="20px" />
                        </div>
                        <div class="circle">
                            <FiLinkedin color="#7a7a7a" size="20px" />
                        </div>
                    </div>
                    <p>or use your email for registration</p>
                    <form>
                        <div class="group">
                            <div class="group-icon">
                                <FiMail color="#7a7a7a" size="20px" />
                            </div>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div class="group">
                            <div class="group-icon">
                                <FiLock color="#7a7a7a" size="20px" />
                            </div>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div class="group">
                            <div class="group-icon">
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