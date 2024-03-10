import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchDataFromFakeFetch } from "../../redux/slices/menuSlice";
import { MenuCard } from "./menuCard/MenuCard";
import { MenuItem } from "../../types";
import './menus.css'

export const Menus = () => {
  const dispatch = useAppDispatch();
  const { menus } = useAppSelector((state) => state.menus);

  useEffect(() => {
    dispatch(fetchDataFromFakeFetch());
  }, []);

  return (
    <div className="menus_container">

    <div className="menus">
      {menus?.data?.menu?.map((menu: MenuItem) => (
        <MenuCard key={menu.id} menu={menu}/>
        ))}
    </div>
        </div>
  );
};
