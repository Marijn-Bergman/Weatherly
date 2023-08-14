import React, { useState } from 'react';
import searchImg from './img/search-white-300x298.png';


const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeypress = e => {
    if (e.charCode === 13) {
      handleSearch();
    }
  };

  return (
    <div className="wrap">
      <div className="search">
        <input
          className="searchTerm"
          placeholder="Search here"
          value={searchTerm}
          type="text"
          onKeyPress={handleKeypress}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="searchButton" onClick={handleSearch}>
          <img className="searchImg" src={searchImg} alt="search" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
