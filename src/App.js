import "./App.css";
import React from "react";
import ProductCard from "./components/ProductCard";
import Sawsan from "./components/Sawsan";

const App = () => {
  const dataArray = [
    {
      name: "Women Tshirt",
      price: 98,
      img: "images/p1.png",
    },
    {
      name: "Men's Tshirt",
      price: 66,
      img: "images/p2.png",
    },
  ];

  const handleClick = (event) => {
    event.preventDefault();
    console.log("hello");
  };

  return <Sawsan />;
};

export default App;
