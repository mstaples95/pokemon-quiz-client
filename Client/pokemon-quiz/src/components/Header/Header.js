import "./header.scss";

import React from "react";

const Header = () => {
  return (
    <header className="header">
      <ul className="header__menu">
        <li className="header__list">
          <h2 className="header__list-title">Pokemon Mix and Match</h2>
        </li>
        <li className="header__list"></li>
      </ul>
    </header>
  );
};

export default Header;
