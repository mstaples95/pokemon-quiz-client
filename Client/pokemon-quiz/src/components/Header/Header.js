import "./header.scss";
import logo from "../../assets/logo/PokemonLogo.png";
import { Link } from "react-router-dom";

import React from "react";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__image">
          <img className="header__image-logo" src={logo} />
        </div>
      </Link>
      <div className="header__menu">
        <ul className="header__menu-list">
          <Link to="/">
            <li className="header__menu-item">Home</li>
          </Link>
          <li className="header__menu-item">About</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
