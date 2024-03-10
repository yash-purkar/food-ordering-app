import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { MenuCard } from "../menuCard/MenuCard";
import { MenuItem } from "../../types";
import { Navbar } from "../navbar/Navbar";

export const Cart = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.menus);

  return (
    <div className="menus_container">
      <Navbar />
      <div className="menus">
        {data.cart.map((menu: MenuItem) => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </div>
      {
        data.cart.length === 0 && <h2 className="no_items_msg">No items in the cart</h2>
      }
    </div>
  );
};
