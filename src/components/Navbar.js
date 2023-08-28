import React from "react";
import "./css/Navbar.css";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { DarkModeContext } from "../App";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const location = useLocation();
  const na = {};
  const color = darkMode
    ? {
        color: "#fcfcfc",
      }
    : na;
  const button_tryfree = darkMode
    ? {
        border: "2px solid var(--light, #FCFCFC)",
        background: "var(--dark, #0F0F0F)",
        boxShadow: "0px 2px 24px 0px rgba(15, 15, 15, 0.50)",
        color: "var(--light, #FCFCFC)",
      }
    : na;
  const default_style = {
    gap: "61rem",
  };
  return (
    <div className="navbar">
      <div className="navbarcontainer">
        <div className="navbar_left" style={color}>
          <a href="/" className="title">
            DimeDash
          </a>
        </div>
        <div className="navbar_right" style={color}>
          <div className="darkmode" onClick={toggleDarkMode}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke={darkMode ? "#FCFCFC" : "#0F0F0F"}
                stroke-width="2"
              />
              <path
                d="M18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364L12 12L18.364 5.63604Z"
                fill={darkMode ? "#FCFCFC" : "#0F0F0F"}
              />
            </svg>
          </div>
          <a href="/signup" className="button_tryfree" style={button_tryfree}>
            Sign up
          </a>
          <a href="/signin" className="button_tryfree" style={button_tryfree}>
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
