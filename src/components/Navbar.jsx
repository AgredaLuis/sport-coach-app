import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import React from "react";
import "./navbar.css";
import { links } from "../constant/data.js";
import { HiBarsArrowDown } from "react-icons/hi2";
import { HiBarsArrowUp } from "react-icons/hi2";

import {images} from '../constant/index'

function Navbar() {
  const [IsNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={images.logo_png} alt="Nav Logo" />
        </Link>
        <ul
          className={` nav__links ${IsNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing( prev => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing( prev => !prev)}/* para que cada click se cierre el navbar*/
        >
          {IsNavShowing ? <HiBarsArrowUp /> : <HiBarsArrowDown />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
