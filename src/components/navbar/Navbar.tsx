import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'
export const Navbar = () => {
  return <nav className="nav">
    <ul>
        {
            ["home","menus","cart"].map((link) => <li key={link}><NavLink to={`/${link === 'home' ? '' : link}`} className='nav_link'>{link}</NavLink></li>)
        }
    </ul>
  </nav>;
};
