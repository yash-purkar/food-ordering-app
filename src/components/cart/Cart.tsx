import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { MenuCard } from "../menuCard/MenuCard";
import { MenuItem } from "../../types";
import { Navbar } from "../navbar/Navbar";
import "./cart.css";

export const Cart = () => {
  const data = useAppSelector((state) => state.menus);
const {totalAmount,totalDelieveryTime}= data.cart.reduce((acc,curr) => {
    return {
        ...acc,
        totalDelieveryTime : acc.totalDelieveryTime + curr.delivery_time,
        totalAmount: acc.totalAmount + curr.price
    }
},{totalDelieveryTime:0,totalAmount:0}); 
  return (
    <>
      <div className="menus_container">
        <Navbar />
        <div className="menus">
          {data.cart.map((menu: MenuItem) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </div>
        {data.cart.length === 0 && (
          <h2 className="no_items_msg">No items in the cart</h2>
        )}
      </div>
      {
        data.cart.length > 0 && <div className="cart_price_details">
        <p>Total Amount : <span className="font-bold">${totalAmount}</span></p>
        <p>Total Delievery time : <span className="font-bold">${totalDelieveryTime}</span></p>
        <small style={{color:'red'}}>We apologize for the inconvenience. Our payment gateway is down, please try checking out later. Thank you for your understanding.</small>
      </div>
      }
    </>
  );
};
