import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

export const Navbar = () => {
  return <nav className="nav">
    <ul>
        {
            ["home","menus","cart"].map((link) => <li key={link}><NavLink to={`/${link === 'home' ? '' : link}`} className='nav_link' style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "1px solid #f97316" : "",
                };
              }} >{link}</NavLink></li>)
        }
    </ul>
  </nav>;
};
