import React from "react";
// import PropTypes from 'prop-types';
import { Chart } from "react-google-charts";
import "../App.css";

const Pie = ({ events, category }) => {
  const eventCountObject = events.reduce(
    (eventCountObject, event, index, array) => {
      let catsToChart;
      const cat = event.classifications
        ? event.classifications[0].segment
          ? event.classifications[0].segment.name
          : "N/A"
        : "N/A";
      const subcat = event.classifications
        ? event.classifications[0].genre
          ? event.classifications[0].genre.name
          : "N/A"
        : "N/A";
      if (category === "") {
        catsToChart = cat;
      } else {
        catsToChart = subcat;
      }
      eventCountObject[catsToChart] = (eventCountObject[catsToChart] || 0) + 1;
      return eventCountObject;
    },
    {}
  );
  console.log(eventCountObject);
  let chartdata = [];
  for (let key in eventCountObject) {
    chartdata.push([key, eventCountObject[key]]);
  }
  console.log(Array.isArray(chartdata), chartdata);
  return chartdata[0] ? (
    <div className="PieChartBox">
      <Chart
        className="pie"
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[["Category", "Events"], ...chartdata]}
        options={{
          title: "Event Categories"
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  ) : (
    <p> </p>
  );
};

Pie.propTypes = {};

export default Pie;
