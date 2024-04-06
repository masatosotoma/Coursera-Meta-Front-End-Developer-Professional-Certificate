import React from "react";

const Nav = () => {
  return (
    <nav>
      <a href="">
        <img src={logo} alt="logo" />
      </a>

      <div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
