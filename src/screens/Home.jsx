import React from 'react'
import {useEffect,useState} from 'react';
import {getBooks} from '../services/books.js';
import Book from '../components/Book.jsx';


function Home() {

  const [books , setBooks] = useState([])

  useEffect(()=>{
    fetchBooks()
  },[]) //only fire this function one time 

  async function fetchBooks () {
    const allBooks = await getBooks()
    setBooks(allBooks)
  }

    return (
      <div>
        <div class= "test">
            <h1>Welcome</h1>
        </div>
        <div className="horizontal-scroll-container"> 
        {
          books.map((book)=>(
          <Book book={book}/>
          )
          )

        }
        

        </div>
      </div>
    

    
    )


  }

export default Home





   