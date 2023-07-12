import { Link } from "react-router-dom";
import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "./Categories";
export default function Navbar() {
  return (
    <>
      <div className="navbar_flex">
        <div className="navbar_header_grid">
          <div className="navbar_header_flex_child1">
          <title>GAmesDownload.com</title>
          <Link to="/home">HOME PAGE</Link>
          <Link to="/top">TOP THIS WEEK</Link>
          <Link to="/questions">FAQ</Link>
          </div>
          <div className="navbar_header_flex_child2">
          <input type="text" placeholder="search" />
          <div>Search</div>
          </div>
          
        </div>
        <div className="navbar_categories_flex">
          <Categories />
        </div>
        <div className="navbar_footer_flex">
          <div>placeholder .. placeholder</div>
          <div>placeHolder 2</div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
