import React, { useState, useEffect } from "react";
import "./Feature.css";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import axios from "axios";

const Feature = () => {
  const [data, setData] = useState(null);

  const URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   console.log(data);

  if (!data) return null;

  return (
    <div className="feature" id="feat">
      <div className="container">
        <div className="left">
          <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryto's & NFT's</p>
          <button className="btn">
            <a href="https://www.dextools.io/app/en/pairs" target="_blank">
              See More Coins
            </a>
          </button>
        </div>

        <div className="right">
          <div className="card">
            <div className="top">
              <img src={data[0].image} alt="" />
            </div>
            <div>
              <h5>{data[0].name}</h5>
              <p>£{data[0].current_price.toLocaleString()}</p>
            </div>
            <div>
              {data[0].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown />
                  {data[0].price_change_percentage_24h.toFixed(2)}%{" "}
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight />
                  {data[0].price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </div>
          </div>
          <div className="card">
            <div className="top">
              <img src={data[1].image} alt="" />
            </div>
            <div>
              <h5>{data[1].name}</h5>
              <p>£{data[1].current_price.toLocaleString()}</p>
            </div>
            <div>
              {data[1].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown />
                  {data[1].price_change_percentage_24h.toFixed(2)}%{" "}
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight />
                  {data[1].price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </div>
          </div>
          <div className="card">
            <div className="top">
              <img src={data[2].image} alt="" />
            </div>
            <div>
              <h5>{data[2].name}</h5>
              <p>£{data[2].current_price.toLocaleString()}</p>
            </div>
            <div>
              {data[2].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown />
                  {data[2].price_change_percentage_24h.toFixed(2)}%{" "}
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight />
                  {data[2].price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </div>
          </div>
          <div className="card">
            <div className="top">
              <img src={data[3].image} alt="" />
            </div>
            <div>
              <h5>{data[3].name}</h5>
              <p>£{data[3].current_price.toLocaleString()}</p>
            </div>
            <div>
              {data[3].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown />
                  {data[3].price_change_percentage_24h.toFixed(2)}%{" "}
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight />
                  {data[3].price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </div>
          </div>
          <div className="card">
            <div className="top">
              <img src={data[4].image} alt="" />
            </div>
            <div>
              <h5>{data[4].name}</h5>
              <p>£{data[4].current_price.toLocaleString()}</p>
            </div>
            <div>
              {data[4].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown />
                  {data[4].price_change_percentage_24h.toFixed(2)}%{" "}
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight />
                  {data[4].price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </div>
          </div>
          <div className="card">
            <div className="top">
              <img src={data[5].image} alt="" />
            </div>
            <div>
              <h5>{data[5].name}</h5>
              <p>£{data[5].current_price.toLocaleString()}</p>
            </div>
            <div>
              {data[5].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown />
                  {data[5].price_change_percentage_24h.toFixed(2)}%{" "}
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight />
                  {data[5].price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
