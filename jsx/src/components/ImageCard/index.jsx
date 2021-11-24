// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS

// 3. CREATE A CLASS BASED COMPONENT
class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      span: 0,
    };

    this.imageRef = React.createRef();
  }

  // Use the componentDidMount lifecycle method to retrieve the height of each image
  componentDidMount() {
    // Create an event listener to determine the height of each image
    this.imageRef.current.addEventListener("load", () => {
      const height = this.imageRef.current.clientHeight;
      const span = Math.ceil(height / 10);
      this.setState({
        span: span,
      });
    });
  }

  render() {
    console.log(this.state.span);
    return (
      <div
        style={{
          gridRowEnd: `span ${this.state.span}`,
        }}
      >
        <img
          src={this.props.element.urls.regular}
          alt={this.props.element.description}
          ref={this.imageRef}
        />
      </div>
    );
  }
}

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default ImageCard;
