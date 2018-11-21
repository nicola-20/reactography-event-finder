import React from "react";
// import PropTypes from 'prop-types';
import "../App.css";
import Modal from './Modal'

const Events = ({ events }) => {
  console.log(events, "in events");
  return (
    <main className="EventList">
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
              <img className="EventImage" src={images[6].url} alt="Event" />
              <p>
                <strong>Venue: </strong>{_embedded.venues[0].name || ""},{" "}
                {_embedded.venues[0].city.name || ""}
              </p>
              <p><strong>Date: </strong>{dates.start.localDate}</p>
              <p>
                <strong>Price:{" "}</strong>
                {priceRanges
                  ? priceRanges[0].max.toFixed(2)
                  : "No Longer Available"}{" "}
                {priceRanges ? priceRanges[0].currency : ""}
              </p>
              <p>
                <strong>Category:{" "}</strong>
                {classifications ? classifications[0].segment ? classifications[0].segment.name : "" : ""}
              </p>
              <p>
                <strong>Sub-Category:{" "}</strong>
                {classifications ? classifications[0].genre ? classifications[0].genre.name : "" : ""}
              </p>
              { seatmap ? (
                <Modal seatmap={seatmap}/>
              ) :(<p> <strong> No seatmap available </strong></p>)}
              
            </li>
          )
        )}
      </ul>
    </main>
  );
};

// Events.propTypes = {

// };

export default Events;
