import React from "react";
import PropTypes from "prop-types";
import { countries } from "../data/countries";

const Filter = ({
  country,
  date,
  search,
  setCountry,
  setDate,
  setCategory
}) => {
  const categories = ["Sports", "Music", "Arts & Theatre", "Film"];
  return (
    <form>
      <select onChange={setCountry}>
        <option value="">Choose a Country...</option>
        {countries.map(countri => (
          <option key={countri} value={countri}>
            {countri}
          </option>
        ))}
      </select>
      <input type="date" onChange={setDate} />
      <input type="text" placeholder="Search for artist/venue" />
      <select onChange={setCategory}>
        <option value="">Choose a Category...</option>
        {categories.map(category => (
          <option>{category}</option>
        ))}
      </select>
    </form>
  );
};

// Filter.propTypes = {

// };

export default Filter;
