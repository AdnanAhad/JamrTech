import React from "react";
import { useState } from "react";
import "./Filters.css";

function Filters() {
  const filterName = [
    {
      id: 1,
      name: "Studios",
    },
    {
      id: 2,
      name: "Jampads",
    },
    {
      id: 3,
      name: "Mixing",
    },
    {
      id: 4,
      name: "Music",
    },
    {
      id: 5,
      name: "Mastering",
    },
  ];
  return (
    <div className="filters">
      {filterName.map((filter) => (
        <div className="filterNames">
          <h4>{filter.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default Filters;
