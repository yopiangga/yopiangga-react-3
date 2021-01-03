

import { FiMenu, FiSearch, FiUser, FiShoppingCart} from 'react-icons/fi';
import {NavLink} from 'react-router-dom';

import $ from 'jquery';

function btnMenu(){
    $('nav .content .menu').toggleClass('active');
}

function searchActive(){
    $('.nav-search').toggleClass('active');
    $('.navbar').toggleClass('search-active');
}

function NavMobile() { 
  return (

    <nav className="navbar mobile">
        <div className="content">
            <div className="btn-menu" onClick={btnMenu}>
                <FiMenu size="24px" color="#534741"/>    
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
                <div className="search" onClick={searchActive}>
                    <FiSearch size="24px" color="#534741"/>    
                </div>
                
                <NavLink exact to="/cart" className="" activeClassName="active">
                    <div className="cart">
                            <FiShoppingCart size="24px" color="#534741"/>
                        <div className="notif">
                            <p>5</p>
                        </div>
                    </div>
                </NavLink>

                <NavLink exact to="/personal" className="" activeClassName="active">
                    <div className="user">
                        <FiUser size="24px" color="#534741"/>
                    </div>
                </NavLink>   

            </div>
        </div>
    </nav>
  );
}

export default NavMobile;
