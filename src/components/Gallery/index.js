//Gallery.js
import React, { useState } from "react";
import { sculptureList } from "../../data";

class Gallery extends React.Component {
  state = {
    index: 0,
    showMore: false,
  };

  handleNextClick = () => {
    this.setState({ index: this.state?.index });
  };

  handleMoreClick = () => {
    this.setState({ showMore: !this.state?.showMore });
  };

  render() {
    let sculpture = sculptureList[this.state?.index];
    return (
      <section>
        <button onClick={this.handleNextClick}>Next</button>
        <h2>
          <i>{sculpture.name} </i>
          by {sculpture.artist}
        </h2>
        <h3>
          ({this.state.index + 1} of {sculptureList.length})
        </h3>
        <button onClick={this.handleMoreClick}>
          {this.state.showMore ? "Hide" : "Show"} details
        </button>
        {this.state.showMore && <p>{sculpture.description}</p>}
        <img src={sculpture.url} alt={sculpture.alt} />
      </section>
    );
  }
}

export default Gallery;
// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleNextClick() {
//     setIndex(index + 1);
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
// return (
//   <section>
//     <button onClick={handleNextClick}>Next</button>
//     <h2>
//       <i>{sculpture.name} </i>
//       by {sculpture.artist}
//     </h2>
//     <h3>
//       ({index + 1} of {sculptureList.length})
//     </h3>
//     <button onClick={handleMoreClick}>
//       {showMore ? "Hide" : "Show"} details
//     </button>
//     {showMore && <p>{sculpture.description}</p>}
//     <img src={sculpture.url} alt={sculpture.alt} />
//   </section>
// );
// }

//
