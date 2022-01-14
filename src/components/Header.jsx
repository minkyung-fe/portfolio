import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Header() {
  const [menu, setMenu] = useState(false);

  const showMenu = (active) => {
    setMenu(active);

    const body = document.querySelector("body");
    const btn = document.querySelector(".gnb__btn");
    const menu = document.querySelector(".gnb__menu");

    if (active) {
      body.classList.add("is_scroll-none");
      btn.classList.add("is_active");
      menu.classList.add("is_show");
    } else {
      body.classList.remove("is_scroll-none");
      btn.classList.remove("is_active");
      menu.classList.remove("is_show");
    }
  };

  return (
    <header className="header">
      <h1 className="header__logo">
        <Link
          onClick={() => {
            showMenu(false);
          }}
          to="/">
          <img src={logo} alt="logo" />
          <span>HOME</span>
        </Link>
      </h1>
      <nav className="gnb">
        <button
          className="gnb__btn"
          onClick={() => {
            menu ? showMenu(false) : showMenu(true);
          }}>
          <span></span>
          <span></span>
        </button>
        <div className="gnb__menu">
          <ul>
            <li>
              <Link
                onClick={() => {
                  showMenu(false);
                }}
                to="/work">
                Work
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  showMenu(false);
                }}
                to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
