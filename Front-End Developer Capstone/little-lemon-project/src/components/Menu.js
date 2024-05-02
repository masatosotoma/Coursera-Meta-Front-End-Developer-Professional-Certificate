import React from "react";
import recipes from "../recipes";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This Weeks specials!</h2>
        <button>Order Menu</button>
      </div>

      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt="" />
            <div>
              <h5>{recipe.title}</h5>
              <p>{recipe.price}</p>
            </div>
            <p>{recipe.description}</p>
            <button className="orderBtn">Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
