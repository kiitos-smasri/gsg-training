import "./App.css";
import React from "react";
import ProductCard from "../components/ProductCard";

const App = async () => {
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

  const handleClick = (ind) => {
    alert(JSON.stringify(dataArray[ind]));
    console.log("Item clicked" + ind);
  };
  return (
    <section className="product_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Our <span>products</span>
          </h2>
        </div>
        <div className="row">
          {dataArray.map((item, index) => (
            <ProductCard {...item} btnClick={handleClick} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
