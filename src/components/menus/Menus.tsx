import React from "react";
import { useAppSelector } from "../../redux/hooks";

export const Menus = () => {
  const { error, menus, status } = useAppSelector((state) => state.menus);
  console.log(error, menus, status);
  return <div>Menus</div>;
};
