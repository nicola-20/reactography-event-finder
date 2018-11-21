import React from "react";
// import PropTypes from 'prop-types';
import {Chart} from 'react-google-charts'
import { Google_Maps_API_KEY } from '../config.js'
import '../App.css'

const Map = ({events, country}) => {
  const eventCountObject = events.reduce((eventCountObject, event, index, array) => {
    const city = event._embedded.venues[0].city.name
    const countri = event._embedded.venues[0].country.countryCode
    eventCountObject[`${city}, ${countri}`] = (eventCountObject[`${city}, ${countri}`] || 0) + 1
    return eventCountObject
  }, {})
  console.log(eventCountObject, '<eventCountObject')
  const cities = Object.keys(eventCountObject)
  const eventCount = Object.values(eventCountObject)
  const cityEvents = cities.map((city, index) => {
    return [city, eventCount[index]]
  })
  console.log(typeof country, country)
  const map = <Chart className="Map"
      width={"500px"}
      height={"300px"}
      chartType="GeoChart"
      data={[
        ["City", "Events"],
        // ["Birmingham, GB", "200" ],
        ...cityEvents
      ]}
      options={{
        region: country === '' ? 'world' : country,
        displayMode: "markers",
        colorAxis: { colors: ["green", "blue"] }
      }}

      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      mapsApiKey={Google_Maps_API_KEY}
      rootProps={{ "data-testid": "2" }}
    />
    console.log(map)
    return map
};

Map.propTypes = {};

export default Map;
