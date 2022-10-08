import "./App.css";
import React from "react";

const App = () => {
  return (
    <section className="why_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Why Shop With Us</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box ">
              <div className="img-box">
                <img src="images/delivery.svg" />
              </div>
              <div className="detail-box">
                <h5>Fast Delivery</h5>
                <p>variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box ">
              <div className="img-box">
                <img src="images/shipping.svg" />
              </div>
              <div className="detail-box">
                <h5>Free Shiping</h5>
                <p>variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box ">
              <div className="img-box">
                <img src="images/quality.svg" />
              </div>
              <div className="detail-box">
                <h5>Best Quality</h5>
                <p>variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
