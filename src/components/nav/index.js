import React from "react";
import { Link } from "gatsby";
import { window } from "browser-monads";

import logo from '../../images/square-arrow.svg';
import './nav.css';

const Nav = () => {

    return (
        <nav>
            <div className="nav__items">
                <Link className="nav__item--left" to="/"><img src={ logo } alt="" className="nav__item--logo"/></Link>
                <Link className={ window.location.href.indexOf('contact') > 0 ? 'nav__item--link active' : 'nav__item--link' }
                    to="/contact">Contact</Link>
                <Link className={ window.location.href.indexOf('blog') > 0 || window.location.href.indexOf('category') > 0 ? 'nav__item--link active' : 'nav__item--link' }
                    to="/blog">Blog</Link>
            </div>
        </nav>
    )
}

export default Nav;