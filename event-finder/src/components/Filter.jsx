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
    <form>
      <select onChange={setCountry}>
        <option value="">Choose a Country...</option>
        {countries.map(countri => (
          <option key={countri} value={countri}>
            {countri}
          </option>
        ))}
      </select>
      <input value={date} type="date" onChange={setDate} />
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
      <select onChange={setCategory}>
        <option value="">Choose a Category...</option>
        {categories.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </form>
  );
};

// Filter.propTypes = {

// };

export default Filter;
