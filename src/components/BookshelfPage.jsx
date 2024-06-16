import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import './BookshelfPage.css';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return (
    <div className="bookshelf-page">
      <h1>My Bookshelf</h1>
      <div className="book-list">
        {bookshelf.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookshelfPage;
