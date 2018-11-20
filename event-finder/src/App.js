import React, { Component } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Events from "./components/Events";
import axios from "axios";
import { API_KEY } from "./config";

class App extends Component {
  state = {
    country: "GB",
    date: new Date(Date.now()),
    search: "",
    category: ""
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Filter
          country={this.state.country}
          date={this.state.date}
          search={this.state.search}
          setCountry={this.setCountry}
          setDate={this.setDate}
          setCategory={this.setCategory}
        />
        <Events />
      </div>
    );
  }

  componentDidUpdate() {
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${
          this.state.country
        }&apikey=${API_KEY}`
      )
      .then(({ data }) => {
        console.log(data);
      });
  }

  setCountry = ({ target: { value } }) => {
    const countryCode = value.slice(0, 3);
    // console.log(countryCode);
    this.setState({ country: countryCode });
  };

  setDate = ({ target: { value } }) => {
    this.setState({ date: value });
  };

  setCategory = ({ target: { value } }) => {
    this.setState({ category: value });
  };
}

export default App;
