import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import './SearchPage.css';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async (q) => {
    const response = await axios.get(`https://openlibrary.org/search.json?q=${q}&limit=10&page=1`);
    setBooks(response.data.docs);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      searchBooks(value);
    } else {
      setBooks([]);
    }
  };

  const addToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    const isAlreadyAdded = bookshelf.some((b) => b.key === book.key);

    if (isAlreadyAdded) {
      alert('Book already added.');
    } else {
      localStorage.setItem('bookshelf', JSON.stringify([...bookshelf, book]));
      alert('Book has been added.');
    }
  };

  return (
    <div className="search-page">
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={handleInputChange}
      />
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.key} book={book} onAdd={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
