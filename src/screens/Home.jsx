import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/books.js';
import Book from '../components/BookScroll.jsx';
import BookScroll from '../components/BookScroll.jsx';

function Home() {
  const [books, setBooks] = useState([]);

  //const fictionBooks = books.filter


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
     <BookScroll books={books} />
     

    </div>
  );
}

export default Home;
