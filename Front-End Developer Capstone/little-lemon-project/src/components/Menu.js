import React from "react";
import recipes from "../recipes";

const Menu = () => {
  return (
    <div className="menu-container">
      <div>
        <h2>This weeks specials</h2>
        <button>Order Menu</button>
      </div>

      <div>
        {recipes.map((receipe) => {
          recipe.id;
        })}
      </div>
    </div>
  );
};

export default Menu;
