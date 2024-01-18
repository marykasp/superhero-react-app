import React from "react";

const SearchForm = ({ handleSubmit, handleSetName, name }) => {
  return (
    <form>
      <input
        className="form-control"
        type="text"
        placeholder="Search for a superhero..."
        name="search"
        value={name}
        onChange={(e) => handleSetName(e.target.value)}
      />
      <button className="search-btn" onClick={handleSubmit}>
        {/* react icons*/}
        Search
      </button>
    </form>
  );
};

export default SearchForm;
