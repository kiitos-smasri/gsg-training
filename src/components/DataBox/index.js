import React from "react";

const DataBox = ({ image, title, description }) => {
  return (
    <div className="col-md-4">
      <div className="box ">
        <div className="img-box">
          <img src={image} />
        </div>
        <div className="detail-box">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DataBox;
