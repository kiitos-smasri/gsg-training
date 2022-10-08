import React from "react";

const CarouselItem = ({
  title,
  subTitle,
  description,
  btnLabel,
  active,
  handleButtonClick,
}) => {
  const onButtonClick = () => {
    handleButtonClick(5);
  };
  return (
    <div className={`carousel-item ${active}`}>
      <div className="container ">
        <div className="row">
          <div className="col-md-7 col-lg-6 ">
            <div className="detail-box">
              <h1>
                <span>{title}</span>
                <br />
                {subTitle}
              </h1>
              <p>{description}</p>
              <div className="btn-box" onClick={() => onButtonClick()}>
                <div className="btn1">{btnLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
