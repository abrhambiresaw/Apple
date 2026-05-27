import React from "react";

import logo from "../images/logo.png";
import search from "../images/search-icon.png";
import cart from "../images/cart.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header-wrapper">
        <div className="internal-wrapper">
          <div className="header-links-wrapper">
            <ul>
              <li className="logo-link">
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </li>
              <li>
                <Link to="/MacBook">Mac</Link>
              </li>
              <li>
                <Link to="/Iphone11">iPhone 11</Link>
              </li>
              <li>
                <Link to="/Iphone">iPhone</Link>
              </li>
              <li>
                <Link to="/Watch">Watch</Link>
              </li>
              <li>
                <Link to="/AirPods">AirPods</Link>
              </li>
              <li>
                <Link to="/MacBookPro">MacBookPro</Link>
              </li>
              <li>
                <Link to="/Support">Support</Link>
              </li>
              <li className="search-link">
                <Link to="/search">
                  <img src={search} alt="Search" />
                </Link>
              </li>
              <li className="cart-link">
                <Link to="/cart">
                  <img src={cart} alt="Cart" />
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
