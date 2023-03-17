import React from "react";
import "./Menu.css";
import { menuItemData } from "../../Data/menuData";

function Menu() {
  return (
    <div className="Menu">
      <div className="menu-container">
        {menuItemData.map((menu) => (
          <div className="menu-item">
            <a href="#">
              <div>
                 <img src={menu.image} alt="Grocery" className="menu-img" />  
                </div>
             <div className="menu-icon-heading">
                <div className="menu-item-heading">
                  <span>{menu.name} </span>
                </div>
                  <span className="menu-down-icon">{menu.downIcon}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
