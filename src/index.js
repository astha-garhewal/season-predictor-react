import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner.js";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );

//   return <div>Latitudes: </div>;
// };

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   // THIS IS THE ONLY TIME we do direct assignment
  //   // to this.state
  //   this.state = { lat: null, errorMessage: "" };

  // }

  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called setstate!!!!
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>;
    }

    return <Spinner message="Please accept location request" />;
  }

  // React says we have to define render!!
  render() {
    return <div className=" border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
