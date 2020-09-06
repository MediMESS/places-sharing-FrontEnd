import React from "react";
import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import "./MainNavigation.css";
import MainHeader from "./MainHeader";
const MainNavigation = () => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">Your Places</Link>
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
