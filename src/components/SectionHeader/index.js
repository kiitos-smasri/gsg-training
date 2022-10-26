import React from "react";
import axios from "axios";
class SectionHeader extends React.Component {
  state = {
    value: "tesssssst",
    products: [],
  };

  counter = 0;
  handleClick = () => {
    this.setState({ value: "nnnnn" });
    console.log(this.state);
    // Wrong
    // this.setState({
    //   counter: this.state.counter + this.props.increment,
    // });

    // Correct
    // this.setState((state, props) => ({
    //   counter: state.counter + props.increment,
    // }));
  };

  async getData() {
    const result = await axios.get("https://dummyjson.com/products");
    this.setState({ products: result?.data?.products });
  }

  //after render component
  componentDidMount() {
    //Mounting Step in component lifecycle
    this.getData();
    console.log("component did mount", this.state.products);
  }

  // // //After re-render

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }
  // // //Before the removal of the component from the DOM,
  // componentWillUnmount() {
  //   console.log("component will unmount");
  // }

  render() {
    return (
      <div
        className="heading_container heading_center"
        onClick={this.handleClick}
      >
        <div>{this.counter}</div>
        <h2>Why Shop With Us</h2>
      </div>
    );
  }
}

export default SectionHeader;
