import React from "react";
import "./styles.scss";

function NotificationItem() {
  return (
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
  );
}

export default NotificationItem;
