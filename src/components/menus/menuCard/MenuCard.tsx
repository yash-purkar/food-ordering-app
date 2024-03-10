import React from "react";
import "./menuCard.css";
import { MenuItem } from "../../../types";

interface MenuItemProps {
  menu: MenuItem;
}

export const MenuCard: React.FC<MenuItemProps> = ({ menu }) => {
  return (
    <div className="menu_card">
      <img src={menu.image} alt={menu.name} className="menu_card_image" />
      <h2>{menu.name}</h2>
      <p className="desc">{menu.description}</p>
      <p className="price">Price: {menu.price}</p>
      <p className="delievery_time">
        Delievery Time : {menu.delivery_time}mins
      </p>
    </div>
  );
};
