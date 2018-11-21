import React from "react";
// import PropTypes from "prop-types";
import { countries } from "../data/countries";

const Filter = ({
  country,
  date,
  keyword,
  setCountry,
  setDate,
  setCategory,
  city,
  setKeyword,
  setCity
}) => {
  const categories = ["Sports", "Music", "Arts & Theatre", "Film"];
  return (
    <form className="Filter">
      <select onChange={setCountry}>
        <option value="">Choose a Country...</option>
        {countries.map(countri => (
          <option key={countri} value={countri}>
            {countri}
          </option>
        ))}
      </select>
      <select onChange={setCategory}>
        <option value="">Choose a Category...</option>
        {categories.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <input
        onChange={setKeyword}
        value={keyword}
        type="text"
        placeholder="Search by keyword"
      />
      <input
        onChange={setCity}
        value={city}
        type="text"
        placeholder="Search by town/city"
      />
      <input value={date} type="date" onChange={setDate} />
    </form>
  );
};

// Filter.propTypes = {

// };

export default Filter;
