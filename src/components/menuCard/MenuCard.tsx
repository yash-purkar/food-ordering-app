import React from "react";
import "./menuCard.css";
import { MenuItem } from "../../types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart, removeFromCart } from "../../redux/slices/menuSlice";

interface MenuItemProps {
  menu: MenuItem;
}

export const MenuCard: React.FC<MenuItemProps> = ({ menu }) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.menus);
  const isAlreadyInCart = data.cart.some(
    (item: MenuItem) => item.id === menu.id
  );

  const handleAddToCart = () => {
    isAlreadyInCart ? dispatch(removeFromCart(menu.id)): dispatch(addToCart(menu));
    ;
  };

  return (
    <div className="menu_card">
      <img src={menu.image} alt={menu.name} className="menu_card_image" />
      <h2>{menu.name}</h2>
      <p className="desc">{menu.description}</p>
      <p className="price">Price: {menu.price}</p>
      <p className="delievery_time">
        Delievery Time : {menu.delivery_time}mins
      </p>
      <button onClick={handleAddToCart} className="button_primary">
        {isAlreadyInCart ? "Remove from cart" : "Add to cart"}
      </button>
    </div>
  );
};
