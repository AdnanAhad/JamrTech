import React from "react";
import "./NavBar.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import jamr from "./jamr.png";

function NavBar() {
  return (
    <div className="navbar">
      <MenuIcon className="menu_item" />
      <img src={jamr} alt="logo" />
      <SearchIcon className="menu_item" />
    </div>
  );
}

export default NavBar;
