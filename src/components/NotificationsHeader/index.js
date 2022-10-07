import React from "react";
import "./styles.css";

function NotificationsHeader() {
  return (
    <div className="header">
      <div className="menuIcon">
        <div className="dashTop"></div>
        <div className="dashBottom"></div>
        <div className="circle"></div>
      </div>

      <span className="title">Timeline</span>

      <input type="text" className="searchInput" placeholder="Search ..." />

      <div className="fa fa-search searchIcon"></div>
    </div>
  );
}

export default NotificationsHeader;
