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

import {NavLink} from 'react-router-dom';


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
                    <li><NavLink exact to="/" className="" activeClassName="active">HOME</NavLink></li>
                    <li><NavLink exact to="/about" className="" activeClassName="active">ABOUT US</NavLink></li>
                    <li><NavLink exact to="/products" className="" activeClassName="active">PRODUCT</NavLink></li>
                    <li><NavLink exact to="/testimonial" className="" activeClassName="active">TESTIMONIALS</NavLink></li>
                    <li><NavLink exact to="/contact" className="" activeClassName="active">CONTACT</NavLink></li>
                </ul>
            </div>
            <div className="icon">
                <div className="search">
                    <FiSearch size="24px" color="#534741" />                 
                </div>
                
                <div className="cart" onclick="window.location.href='cart.html'">
                    <NavLink exact to="/cart" className="" activeClassName="active">
                        <FiShoppingCart size="24px" color="#534741"/>
                    </NavLink>
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
