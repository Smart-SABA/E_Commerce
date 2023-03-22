import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  let token = localStorage.getItem("token");

  const clickHandler = (e) => {
    e.preventDefault();

    if (token !== null) {
      localStorage.clear();
      return;
    }
  };

  return (
    <>
      <header>
        <nav className="Nav_listHeader">
          <ul className="links">
            <li>
              <Link to="/">
                {/* <img src={logo} className="nav__logo" alt="Logo" /> */}
                Home
              </Link>
            </li>

            {/* <li>
              <Link to="/electronics" className="nav-link active">
                Electronics
              </Link>
            </li> */}

            <li>
              <Link to="/product" className="nav-link active">
                Product
              </Link>
            </li>

            <li>
              <Link to="/User" className="nav-link active">
                User
              </Link>
            </li>

            <li>
              <Link to="/contact" className="nav-link active">
                Contact
              </Link>
            </li>

            <li onClick={clickHandler}>
              <Link to="/" className="nav-link active">
                Log Out
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
