import React, { Component } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Events from "./components/Events";
import axios from "axios";
import { API_KEY } from "./config";
import _ from "lodash";
import eql from "deep-eql";
import Chart from "./components/Chart";

class App extends Component {
  state = {
    events: [],
    country: "GB",
    date: new Date(Date.now()).toISOString().slice(0, 10),
    keyword: "",
    category: "",
    city: ""
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Filter
          country={this.state.country}
          date={this.state.date}
          keyword={this.state.keyword}
          setCountry={this.setCountry}
          setDate={this.setDate}
          setCategory={this.setCategory}
          city={this.state.city}
          setKeyword={this.setKeyword}
          setCity={this.setCity}
        />
        <Chart />
        <Events events={this.state.events} />
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (!eql(Object.values(prevState), Object.values(this.state))) {
      this.getEvents();
    }
  }

  getEvents = _.debounce(
    () =>
      axios
        .get(
          `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${
            this.state.country
          }&apikey=${API_KEY}&keyword=${
            this.state.keyword
          }&classificationName=${this.state.category}&city=${
            this.state.city
          }&sort=date,asc&startDateTime=${this.state.date}T15:00:00Z`
        )
        .then(({ data }) => {
          if (data._embedded) {
            const events = data._embedded.events;
            console.log(events);
            this.setState({
              events
            });
          }
        }),
    1000
  );

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

  setKeyword = ({ target: { value } }) => {
    this.setState({ keyword: value });
  };

  setCity = ({ target: { value } }) => {
    this.setState({ city: value });
  };
}

export default App;
