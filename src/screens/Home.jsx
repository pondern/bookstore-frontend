import React, { useState, useEffect } from 'react';
import '../'; // Import your CSS file for styling

const BookScroll = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('YOUR_API_ENDPOINT');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const fetchedBooks = await response.json();
        setBooks(fetchedBooks); // Set the fetched books into state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBooks();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="scrollable-books">
      <div className="books-container">
        {books.map(book => (
          <div key={book.id} className="book">
            {book.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookScroll;
