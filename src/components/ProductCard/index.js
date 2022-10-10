import React from "react";

const ProductCard = ({ name, price, img, btnClick, index, children }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-4">
      <div className="box">
        <div className="option_container">
          <div className="options">
            <a className="option1" onClick={() => btnClick(index)}>
              Add to Cart
            </a>
            <a className="option2" onClick={() => btnClick(index)}>
              Buy Now
            </a>
          </div>
        </div>
        <div className="img-box">
          <img src={img} alt="" />
        </div>
        <div className="detail-box">{children}</div>
      </div>
    </div>
  );
};

export default ProductCard;
