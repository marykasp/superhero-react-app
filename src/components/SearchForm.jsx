import React from "react";

const SearchForm = ({ handleSubmit, handleSetName, name }) => {
  return (
    <form className="search-form-header">
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
      <div className="search-list" id="search-list">
        {/* <div className="search-list-item">
          <img src="" alt="" />
          <p>Batman</p>
        </div> */}
      </div>
    </form>
  );
};

export default SearchForm;
