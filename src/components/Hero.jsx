import React from "react";
import "./Hero.css";
import heroimg from "../assets/hero-img.png";
import { motion as m } from "framer-motion";

const Hero = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className="hero"
    >
      <div className="container">
        <div>
          <p>Buy & Sell Crypto 24/7 using your Individual savings account</p>
          <h1>Invest in Cryptocurrency with your ISA</h1>
          <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">
              <a href="https://www.coingecko.com/" target="_blank">
                Learn More
              </a>
            </button>
          </div>
        </div>
        <div className="right">
          <div className="img-container">
            <img src={heroimg} alt="" />
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Hero;
