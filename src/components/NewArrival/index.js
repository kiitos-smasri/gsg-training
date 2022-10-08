import React from "react";

const NewArrival = ({
  topic: userTopic,
  description = "Hello Default Value",
  label,
  person: { name, address },
  title,
}) => {
  //console.log({ name }, { address });
  return (
    <section className="arrival_section">
      <div className="container">
        <div className="box">
          <div className="arrival_bg_box">
            <img src="images/arrival-bg.png" alt="" />
          </div>
          <div className="row">
            <div className="col-md-6 ml-auto">
              <div className="heading_container remove_line_bt">
                <h2>{userTopic}</h2>
              </div>
              <p style={{ marginTop: "20px", marginBottom: "30px" }}>
                {description}
              </p>
              <a href="">{label}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
