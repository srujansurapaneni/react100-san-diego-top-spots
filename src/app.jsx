import React, { Component } from "react";
import axios from "axios";
import TopSpot from "./topspot";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topspots: []
    };
  }
  componentWillMount() {
    axios
      .get("https://origin-top-spots-api.herokuapp.com/api/topspots")
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }
  render() {
    return (
      <div className="container">
        <br />
        <div className="alert alert-secondary" role="alert">
          <h4>San Diego Top Spots</h4>
          <h6>A list of the top 30 places to see in San Diego, California.</h6>
        </div>
        <br />
        <div className="alert alert-primary" role="alert">
          {this.state.topspots.map(topspot => (
            <div className="alert alert-success" role="alert" key={topspot.id}>
              <TopSpot
                key={topspot.id}
                name={topspot.name}
                description={topspot.description}
                location={topspot.location}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
