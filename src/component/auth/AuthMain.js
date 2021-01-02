
import logo from '../../assets/images/logo.png';
import logoLight from '../../assets/images/logo-light.png';
import { FiFacebook, FiLinkedin, FiLock, FiMail } from 'react-icons/fi';

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
                    <form action="dashboard.html">
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
                        <button class="btn-sign-in">SIGN IN</button>
                    </form>
                </div>
                <div class="sign-in-2">
                    <h1>Hello, <span>Friend!</span></h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button class="btn-sign-in">SIGN IN</button>
                </div>
            </div>



            <div class="content-right">
                <div class="sign-up">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal detail and start buying with us</p>
                    <button class="btn-sign-up">SIGN UP</button>
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
                    <form action="index.html">
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
                        <button class="btn-sign-up">SIGN UP</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
}