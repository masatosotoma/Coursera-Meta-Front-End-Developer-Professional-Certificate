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
    </nav>
  );
};

export default Nav;
