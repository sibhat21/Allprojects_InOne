import React from "react";
import search from "../Resource/images/icons/search-icon.png";
import cart from "../Resource/images/icons/cart.png";
import logo from "../Resource/images/icons/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <Link to="/main/" className="navbar-bran logo">
              <img src={logo} alt="xx" />
            </Link>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <Link className="nav-link" to="/mac/">
                    Mac
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/iphone/">
                    iphone
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ipad/">
                    ipad
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/watch/">
                    watch
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tv/">
                    tv
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/music/">
                    Music
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products/">
                    Products
                  </Link>
                </li>
                <li className="nav-item logo-link">
                  <Link className="nav-link" to="/search/">
                    <img src={search} alt="x" />
                  </Link>
                </li>
                <li className="nav-item logo-link">
                  <Link className="nav-link " to="/cart/">
                    <img src={cart} alt="x" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
