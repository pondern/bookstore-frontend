import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/books.js';
import Book from '../components/Book.jsx';

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []); // Only fire this function one time

  async function fetchBooks() {
    const allBooks = await getBooks();
    setBooks(allBooks);
  }

  return (
    <div>
      <div className="test">
        <h1>Welcome</h1>
      </div>
      <div className="scrollable-books-container">
        <div className="horizontal-scroll-container">
          {books.slice(0, 10).map((book) => (
            <div key={book.rank} className="book-item">
              <Book book={book} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
