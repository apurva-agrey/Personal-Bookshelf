import React from 'react';
import './BookCard.css';

const BookCard = ({ book, onAdd }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
      {onAdd && <button onClick={() => onAdd(book)}>Add to Bookshelf</button>}
    </div>
  );
};

export default BookCard;
