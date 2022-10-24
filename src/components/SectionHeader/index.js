import React from "react";

class SectionHeader extends React.Component {
  state = {
    value: "tesssssst",
  };
  handleClick = () => {
    this.setState({ value: "nnnnn" });
    console.log(this.state);
  };

  /**** Mounting */
  //called before render component
  componentWillMount() {
    console.log("will mount");
  }
  //after render component
  componentDidMount() {
    console.log("component mount");
  }

  /**Updating */
  //before component re-render
  componentWillUpdate() {}

  //After re-render
  componentDidUpdate() {}

  //Before the removal of the component from the DOM,
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    return (
      <div
        className="heading_container heading_center"
        onClick={this.handleClick}
      >
        <h2>Why Shop With Us</h2>
      </div>
    );
  }
}

export default SectionHeader;
