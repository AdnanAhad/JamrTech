import React from "react";
import "./City.css";

function City({ cities }) {
  return (
    <div className="city">
      <img src={cities.image} alt="img" />
      <span>{cities.name}</span>
    </div>
  );
}

export default City;
