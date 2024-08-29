import React from "react";
import "./navbar.css";
import { FaRegUserCircle } from "react-icons/fa";
import { MdStorage } from "react-icons/md";
import { Link } from "react-router-dom";
import OfCanvas from "../ofcanvas/OfCanvas";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <MdStorage size={30} />
      </div>
      <div className="nav-list">
        <div id="Home">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
        </div>
        <div id="About">About</div>
        <div id="Contact">Contact</div>
        <div>
          {/* <Link to="/profile">
            <FaRegUserCircle size={22} />
          </Link> */}
          <Link>
            <OfCanvas />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
