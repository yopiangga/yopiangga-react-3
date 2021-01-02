import '../../assets/css/css-reset.css';
import '../../assets/scss/style.css';
import '../../assets/scss/style-mobile.css';
import '../../assets/scss/style-landscape.css';
import '../../assets/scss/style-tab.css';
import '../../assets/css/fonts.css';
import '../../assets/js/aos/aos.css';
import '../../assets/css/animate.min.css';

import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';

import logo from '../../assets/images/logo.png';

function Nav() {
  return (
    <nav className="navbar desktop">
        <div className="content">
            <div className="brand">
                <div className="logo">
                    <img src={logo} alt=""></img>
                </div>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="dashboard.html" className="active">HOME</a></li>
                    <li><a href="about-us.html">ABOUT US</a></li>
                    <li><a href="products.html">PRODUCT</a></li>
                    <li><a href="testimonials.html">TESTIMONIALS</a></li>
                    <li><a href="contact.html">CONTACT</a></li>
                </ul>
            </div>
            <div className="icon">
                <div className="search">
                    <FiSearch size="24px" color="#534741"/>                 
                </div>
                
                <div className="cart" onclick="window.location.href='cart.html'">
                    <FiShoppingCart size="24px" color="#534741"/>
                    <div className="notif">
                        <p>5</p>
                    </div>
                </div>

                <div className="user" onclick="window.location.href='personal-information.html'">
                    <FiUser size="24px" color="#534741"/>
                </div>
                
            </div>
        </div>
    </nav>
    
  );
}

export default Nav;
