import React from "react";

class ProductCard extends React.Component {
  render() {
    const { btnClick, index, img, children } = this.props;
    return (
      <div className="col-sm-6 col-md-4 col-lg-4">
        <div className="box">
          <div className="option_container">
            <div className="options">
              <a
                className="option1"
                onClick={(event) => btnClick(event, index)}
              >
                Add to Cart
              </a>
              <a
                className="option2"
                onClick={(event) => btnClick(event, index)}
              >
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
  }
}

// const ProductCard = ({ name, price, img, btnClick, index, children }) => {

// };

export default ProductCard;
