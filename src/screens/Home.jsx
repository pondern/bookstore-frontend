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
      <div>
      <div className="test">
        <h1>Welcome</h1>
      </div>
      <div className='book-reviews-container'>
      <h2 className='staff-picks'>Staff Picks</h2>
      <div className='book-reviews'>
        <div className='book-1'>
          <img
            src='https://storage.googleapis.com/du-prd/books/images/9781974710027.jpg'
            alt='manga'
          />
          <p className='book-1-p'>"Yuji Itadori is resolved to save the world from cursed demons, but he soon learns that the best way to do it is to slowly lose his humanity and become one himself."</p>
        </div>

        <div className='book-2'>
          <img
            src='https://storage.googleapis.com/du-prd/books/images/9781423131892.jpg'
            alt='children'
          />
          <p className='book-2-p'>"Twelve-year-old Percy Jackson is on the most dangerous quest of his life. With the help of a satyr and a daughter of Athena, Percy must journey across the United States to catch a thief who has stolen the original weapon of mass destruction — Zeus' master bolt."</p>
        </div>
      </div>
    </div>
      </div>
      <div>
      <h3>Top Ranked</h3>
     <BookScroll books={books}/>
     <h4>Top Fiction</h4>
     <BookScroll books={fictionBooks}/>
     <h5>Top Manga</h5>
     <BookScroll books={mangaBooks}/>
    </div>
    </div>
    );
}

export default Home;
