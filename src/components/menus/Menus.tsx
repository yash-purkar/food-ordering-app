import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchDataFromFakeFetch } from "../../redux/slices/menuSlice";
import { MenuCard } from "../menuCard/MenuCard";
import { MenuItem } from "../../types";
import "./menus.css";
import { Navbar } from "../navbar/Navbar";
import { Filters } from "../filters/Filters";
import { Loading } from "../loading/Loading";

export const Menus = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.menus);
  const filters = useAppSelector((state) => state.filters);
  const { searchQuery, veg, spicy, sort } = filters;

  const transformData = (data: MenuItem[] = []) => {
    let filteredData = [...data];
    if (searchQuery) {
      filteredData = filteredData.filter((menu) =>
        menu.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (veg) {
      filteredData = filteredData.filter((menu) => menu.is_vegetarian);
    }

    if (spicy) {
      filteredData = filteredData.filter((menu) => menu.is_spicy);
    }

    //it will change original arra somehow, so don't need to assign it again
    filteredData.sort((a, b) =>
      sort === "lowToHigh" ? a.price - b.price : b.price - a.price
    );

    return filteredData;
  };

  const menus = transformData(data?.menus?.data?.menu);

  useEffect(() => {
    dispatch(fetchDataFromFakeFetch());
  }, []);

  return (
    <div className="menus_container">
      <Navbar />
      <Filters />
      {data.status === "success" && (
        <>
          <div className="menus">
            {menus?.map((menu: MenuItem) => (
              <MenuCard key={menu.id} menu={menu} />
            ))}
          </div>
          {menus?.length === 0 && (
            <h2 className="no_items_msg">No items found</h2>
          )}
        </>
      )}
      {
        data.status === 'loading' && <Loading text="Getting menus, Please wait"/>
      }
    </div>
  );
};
