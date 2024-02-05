import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img src="https://cdn.onlinewebfonts.com/svg/img_456677.png" alt="" />
      <div className="banner_price">
        <h5>Get your song recorded at just</h5>
        <h2>INR 2999/-</h2>
      </div>
      <div className="banner_sale">
        <h2>Sale</h2>
        <h2>Sale</h2>
        <h2>Sale </h2>
      </div>
    </div>
  );
}

export default Banner;
