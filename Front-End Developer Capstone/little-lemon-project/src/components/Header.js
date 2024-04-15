import React from "react";

const Header = () => {
  return (
    <header className="header">
      <section>
        {/*banner texts*/}
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional receipes served with a modern twist
          </p>
          <button aria-label="On Click">Reserve Table</button>
        </div>

        {/*banner image*/}
        <div>
          <img src="" alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
