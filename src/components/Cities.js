import React from "react";
import "./Cities.css";
import City from "./City";

function Cities() {
  const cities = [
    {
      name: "Mumbai",
      image:
        "https://images.pexels.com/photos/2775509/pexels-photo-2775509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Bangaluru",
      image:
        "https://images.pexels.com/photos/3290386/pexels-photo-3290386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Delhi",
      image:
        "https://images.pexels.com/photos/1542620/pexels-photo-1542620.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      name: "Pune",
      image:
        "https://images.pexels.com/photos/8876658/pexels-photo-8876658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];
  return (
    <div className="cities">
      {cities.map((city) => (
        <City cities={city} />
      ))}
    </div>
  );
}

export default Cities;
