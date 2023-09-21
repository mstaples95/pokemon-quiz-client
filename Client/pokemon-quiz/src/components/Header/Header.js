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
      <div className="music-player">
        <iframe
          className="jukebox"
          title="jukebox"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1692262794&color=%23ff0019&auto_play=false&hide_related=false&show_comments=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>
    </header>
  );
};

export default Header;
