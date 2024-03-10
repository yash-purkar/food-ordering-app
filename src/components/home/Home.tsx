import React from "react";
import './home.css'
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToMenus = () => {
    navigate('/menus')
  }
  return (
    <div className="home_container">
      <div className="home_actions">
        <h2>Welcome to Yash's restaurant</h2>
        <p>Click button to explore the menus.</p>
        <button onClick={handleNavigateToMenus} className="button_primary">Explore Menus</button>
      </div>
    </div>
  );
};
