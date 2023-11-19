import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/books.js';
import Book from '../components/BookScroll.jsx';
import BookScroll from '../components/BookScroll.jsx';

function Home() {
  const [books, setBooks] = useState([]);

const fictionBooks = books.filter(
 (book) =>
 book.display_name.toLowerCase().includes("fiction") 
)

const mangaBooks = books.filter(
  (book) =>
  book.display_name.toLowerCase().includes("manga")
)


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
      <h2>Top Ranked</h2>
     <BookScroll books={books}/>
     <h3>Top Fiction</h3>
     <BookScroll books={fictionBooks}/>
     <h4>Top Manga</h4>
     <BookScroll books={mangaBooks}/>
    

    </div>
  );
}

export default Home;
