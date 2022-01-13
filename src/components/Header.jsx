import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Header() {
  const showMenu = () => {
    const body = document.querySelector("body");
    const btn = document.querySelector(".gnb__btn");
    const menu = document.querySelector(".gnb__menu");

    body.classList.toggle("is_scroll-none");
    btn.classList.toggle("is_active");
    menu.classList.toggle("is_show");
  };

  return (
    <header className="header">
      <h1 className="header__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
          <span>HOME</span>
        </Link>
      </h1>
      <nav className="gnb">
        <button className="gnb__btn" onClick={showMenu}>
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
