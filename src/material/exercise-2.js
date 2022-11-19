import "./App.css";
import React from "react";

const App = () => {
  return (
    <div className="demo">
      <div className="notificationsFrame">
        <div className="panel">
          <div className="header">
            <div className="menuIcon">
              <div className="dashTop"></div>
              <div className="dashBottom"></div>
              <div className="circle"></div>
            </div>

            <span className="title">Timeline</span>

            <input
              type="text"
              className="searchInput"
              placeholder="Search ..."
            />

            <div className="fa fa-search searchIcon"></div>
          </div>
          <div className="content">
            <div className="line"></div>
            <div className="item">
              <div className="avatar">
                <img
                  alt="doug"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg/200px-Lion_%28Panthera_leo%29_male_6y.jpg"
                />
              </div>

              <span className="time">An hour ago</span>
              <p>Ate lunch</p>
            </div>

            <div className="item">
              <div className="avatar">
                <img
                  alt="doug"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg/200px-Lion_%28Panthera_leo%29_male_6y.jpg"
                />
              </div>

              <span className="time">10 am</span>
              <p>Read Day two article</p>
            </div>

            <div className="item">
              <div className="avatar">
                <img
                  alt="doug"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg/200px-Lion_%28Panthera_leo%29_male_6y.jpg"
                />
              </div>

              <span className="time">10 am</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className="item">
              <div className="avatar">
                <img
                  alt="doug"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg/200px-Lion_%28Panthera_leo%29_male_6y.jpg"
                />
              </div>

              <span className="time">2:21 pm</span>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
