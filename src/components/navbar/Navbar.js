import React, { useState } from "react";
import "../navbar/navbar.scss";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__navbar-links">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#gpt3">What is GPT?</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="navbar__sign">
        <p>Sign In</p>
        <button>Sign Up</button>
      </div>
      <div className="navbar__menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar__menu-container scale-up-center">
            <div className="navbar__navbar-menu-container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#gpt3">What is GPT?</a>
              </p>
              <p>
                <a href="#possibility">Open AI</a>
              </p>
              <p>
                <a href="#features">Case Studies</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
            </div>
            <div className="navbar__menu-container-links-sign">
              <p>Sign In</p>
              <button>Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
