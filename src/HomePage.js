import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookItem from './components/BookItem';
import SearchBar from './components/SearchBar';
import './components/styles.css';

function HomePage() {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [readBook, setReadBook] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    try {
      const response = await axios.get(
        'https://openlibrary.org/people/mekBot/books/already-read.json'
      );
      console.log(response);
      let bookData = response.data.reading_log_entries.filter(
        (item) => item?.work?.title && item?.work?.author_names
      );
      setBooks(bookData);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }

  const bookToShowOnUI = searchResults.length ? searchResults : books;

  const handleReadStatusChange = (book) => {
    setReadBook(book);
  };

  return (
    <div>
      <SearchBar setSearchResults={setSearchResults} books={books} />
      <div className='bookListWrapper'>
        {bookToShowOnUI?.map((book) => (
          <BookItem
            key={book.key}
            book={book}
            setReadBook={handleReadStatusChange}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
