import React from "react";
import "./Studio.css";

function Studio({ studios }) {
  return (
    <div className="studio">
      <img src={studios.image} alt="img" />
      <h5>{studios.name}</h5>
      <span>{studios.stars}</span>
      <small>{studios.price}</small>
    </div>
  );
}

export default Studio;
