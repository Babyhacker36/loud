import React from "react";

const Search = ({ starInput, setStarInput, addStar }) => {
  return (
    <div className="col-md-6 col-lg-5 middle">
      <label htmlFor="star-input">Choose Your Star</label>
      <input
        type="text"
        id="star-input"
        value={starInput}
        onChange={(e) => setStarInput(e.target.value)}
      />
      <button className="btn-style" onClick={addStar} type="button">
        Add A Star
      </button>
    </div>
  );
};

export default Search;

// to use component

// import Search from "../Search/Search";
//  <Search starInput={starInput} setStarInput={setStarInput} addStar={addStar} />
