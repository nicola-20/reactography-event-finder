import React from "react";
// import PropTypes from 'prop-types';
import "../App.css";

const Events = ({ events }) => {
  console.log(events, "in events");
  return (
    <ul>
      {events.map(
        ({
          id,
          name,
          images,
          classifications,
          dates,
          info,
          priceRanges,
          seatmap,
          _embedded
        }) => (
          <li key={id}>
            <h3>{name}</h3>
            <img className="EventImage" src={images[0].url} alt="Event" />
            <p>
              Venue: {_embedded.venues[0].name || ""},{" "}
              {_embedded.venues[0].city.name || ""}
            </p>
            <p>Date: {dates.start.localDate}</p>
            <p>
              Price:{" "}
              {priceRanges
                ? priceRanges[0].max.toFixed(2)
                : "No Longer Available"}{" "}
              {priceRanges ? priceRanges[0].currency : ""}
            </p>
            <p>
              Category: {classifications ? classifications[0].segment.name : ""}
            </p>
            <p>
              Sub-Category:{" "}
              {classifications ? classifications[0].genre.name : ""}
            </p>
            {/* <p>Summary: {info}</p> */}
            <img
              className="EventImage"
              src={seatmap ? seatmap.staticUrl : "seatmap"}
              alt="seatmap"
            />
          </li>
        )
      )}
    </ul>
  );
};

// Events.propTypes = {

// };

export default Events;
