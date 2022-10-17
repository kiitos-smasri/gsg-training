import "./App.css";
import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  let counter = 0;

  const count = () => {
    counter = counter + 1;
    console.log(counter);
  };

  return (
    <section className="product_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Our <span>products</span>
          </h2>
        </div>
        <div className="row">{counter}</div>

        <div className="btn-box">
          <a onClick={count}>Add one</a>
        </div>
      </div>
    </section>
  );
};

export default App;
