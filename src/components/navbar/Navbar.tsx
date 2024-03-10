import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useAppSelector } from "../../redux/hooks";

export const Navbar = () => {
  const data = useAppSelector((state) => state.menus);
  return (
    <nav className="nav">
      <ul>
        {["home", "menus", "cart"].map((link) => (
          <li key={link}>
            <NavLink
              to={`/${link === "home" ? "" : link}`}
              className="nav_link"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "1px solid #f97316" : "",
                };
              }}
            >
              {link}{data?.cart.length !== 0 &&link === "cart"&&<span>({data?.cart.length})</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
