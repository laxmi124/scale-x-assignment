import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookItem from './BookItem';
import './styles.css';

function SearchBar({setSearchResults, books}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleBookSearch = (e) => {
     if (e.target.value.trim() !== '') {
      let searchedBooks = books.filter((item) => item.work.title && item.work.title.toLowerCase() == e.target.value.toLowerCase());
      setSearchResults(searchedBooks)
    } else {
      setSearchResults([]);
    }
    setSearchQuery(e.target.value)
  }


  return (
    <div>
      <div className='navWrapper'>
        <input
          type="text"
          className='serachInput'
          placeholder="Search books by title"
          value={searchQuery}
          onChange={(e) => handleBookSearch(e)}
        />
      </div>
    </div>
    
  );
}

export default SearchBar;
