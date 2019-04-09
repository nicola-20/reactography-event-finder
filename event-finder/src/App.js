import React, { Component } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Events from "./components/Events";
import axios from "axios";
// import { API_KEY } from "./config";
import _ from "lodash";
import eql from "deep-eql";
import Map from "./components/Map";
import Pie from "./components/Pie";

class App extends Component {
  state = {
    events: [],
    country: "",
    date: new Date(Date.now()).toISOString().slice(0, 10),
    keyword: "",
    category: "",
    city: ""
  };
  render() {
    return (
      <div className="App">
        <div className="background">
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
          <div className="charts">
            <Map events={this.state.events} country={this.state.country}/>
            <Pie events={this.state.events} category={this.state.category}/>
          </div>
        </div>
        <Events events={this.state.events} />
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (!eql(Object.values(prevState), Object.values(this.state))) {
      this.getEvents();
    }
  }

  // componentDidMount() {
  //   this.getEvents()
  // }

  getEvents = _.debounce(
    () =>
      axios
        .get(
          `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${
            this.state.country
          }&apikey=${`a3X5cnP8WEn1WjmfWDSmu2DyUUtP3fVL`}&keyword=${
            this.state.keyword
          }&classificationName=${this.state.category}&city=${
            this.state.city
          }&sort=date,asc&startDateTime=${this.state.date}T15:00:00Z&size=200`
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
    const countryCode = value.slice(0, 2);
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
