import React from "react";
import styles from "./styles.module.css";

class AddsBar extends React.Component {
  render() {
    return (
      <div className={styles.addBarContainer}>
        Free shipping for orders above USD 150
      </div>
    );
  }
}

export default AddsBar;
