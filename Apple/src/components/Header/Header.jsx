import React from "react";

import logo from '../images/logo.png';
import search from '../images/search-icon.png';
import cart from '../images/cart.png';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header-wrapper">
        <div className="internal-wrapper">
          <div className="header-links-wrapper">
            <ul>
              <li className="logo-link">
                <Link href="/">
                  <img src={logo} />
                </Link>
              </li>
              <li>
                <Link href="/mac/">Mac</Link>
              </li>
              <li>
                <Link href="#">iphone</Link>
              </li>
              <li>
                <Link href="#">ipad</Link>
              </li>
              <li>
                <Link href="#">watch</Link>
              </li>
              <li>
                <Link href="#">tv</Link>
              </li>
              <li>
                <Link href="#">Music</Link>
              </li>
              <li>
                <Link href="#">Support</Link>
              </li>
              <li className="search-link">
                <Link href="/search/">
                  <img src={search} />
                </Link>
              </li>
              <li className="cart-link">
                <Link href="/cart/">
                  <img src={cart} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
