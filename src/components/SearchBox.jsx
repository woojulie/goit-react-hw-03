import React from "react";

const SearchBox = ({ filter, onSearchChange }) => {
  return (
    <div>
      <label>Find contacts by name</label>
      <input type="text" value={filter} onChange={onSearchChange} />
    </div>
  );
};

export default SearchBox;
