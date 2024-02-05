import React from "react";
import Studio from "./Studio";
import "./Studios.css";

function Jampads() {
  const studios = [
    {
      id: 1,
      name: "JAMR 402",
      image:
        "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "₹4000/hr",
      stars: "☆☆☆☆",
    },
    {
      id: 2,
      name: "JAMR 100",
      image:
        "https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "₹3000/hr",
      stars: "☆☆",
    },
    {
      id: 3,
      name: "JAMR D02",
      image:
        "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "₹2500/hr",
      stars: "☆☆☆☆",
    },
    // {
    //   id: 4,
    //   name: "JAMR JM2",
    //   image:
    //     "https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //   price: "₹3200/hr",
    //   stars: "☆☆☆☆☆",
    // },
    // {
    //   id: 5,
    //   name: "JAMR adn",
    //   image:
    //     "https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //   price: "₹1000/hr",
    //   stars: "☆☆☆",
    // },
    // {
    //   id: 6,
    //   name: "JAMR nan",
    //   image:
    //     "https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //   price: "₹320/hr",
    //   stars: "☆☆",
    // },
    {
      id: 4,
      name: "JAMR JM2",
      image:
        "https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "₹3200/hr",
      stars: "☆☆☆☆☆",
    },
    {
      id: 666,
      name: "JAMR 402",
      image:
        "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "₹4000/hr",
      stars: "☆☆☆☆",
    },
    {
      id: 767,
      name: "JAMR 100",
      image:
        "https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "₹3000/hr",
      stars: "☆☆",
    },
  ];
  return (
    <div className="studios">
      <div className="studios_head">
        <h2>Jampads</h2>
        <h2>➜</h2>
      </div>
      <div className="studios_body">
        {studios.map((studios) => (
          <Studio studios={studios} />
        ))}
      </div>
    </div>
  );
}

export default Jampads;
