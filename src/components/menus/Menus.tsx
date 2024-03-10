import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchDataFromFakeFetch } from "../../redux/slices/menuSlice";
import { MenuCard } from "../menuCard/MenuCard";
import { MenuItem } from "../../types";
import "./menus.css";
import { Navbar } from "../navbar/Navbar";
import { Filters } from "../filters/Filters";

export const Menus = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.menus);

  useEffect(() => {
    dispatch(fetchDataFromFakeFetch());
  }, []);
  console.log(data);
  return (
    <div className="menus_container">
      <Navbar />
      <Filters/>
      <div className="menus">
        {data?.menus?.data?.menu?.map((menu: MenuItem) => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </div>
      {data?.menus?.data?.menu?.length === 0 && <h2>No items found</h2>}
    </div>
  );
};
