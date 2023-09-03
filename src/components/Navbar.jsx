import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion as m } from "framer-motion";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className="header"
    >
      <div className="container">
        <h1>
          De<span className="primary">Fi</span>{" "}
        </h1>
        <ul className={click ? "nav-menu" : "nav-menu active"}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#feat">Featured</a>
          </li>
          <li>
            <a href="#ea">Earn</a>
          </li>
          <li>
            <a href="#foot">Contact</a>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Connect Wallet</button>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars size={20} style={{ color: "#333" }} />}
        </div>
      </div>
    </m.div>
  );
};

export default Navbar;
