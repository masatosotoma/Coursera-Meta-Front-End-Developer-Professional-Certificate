import React from "react";
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <div>
      <section>
        <div className="company-info">
          <img src={logo} alt="" />
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes served with a modern twist
          </p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
              </div>
              <div>
                  <h3>Contact</h3>
                  <ul>
                      <li>Address: <br/> 123 Towncity, USA</li>
                  </ul>
              </div>
      </section>
    </div>
  );
};

export default Footer;
