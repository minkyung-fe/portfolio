import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
          <span>HOME</span>
        </Link>
      </h1>
      <nav className="gnb">
        <button className="gnb__btn">
          <span></span>
          <span></span>
        </button>
        <div className="gnb__menu">
          <ul>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
