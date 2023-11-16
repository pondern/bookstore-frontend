import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getBooks } from "./services/books.js";
import NavBar from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
import Grid from "./screens/Grid.jsx";
import Book from "./screens/Book.jsx";
import "./App.css";

function App() {
  const [thumbnails, setThumbnails] = useState([]);
  const [filteredThumbnails, setFilteredThumbnails] = useState([]);

  useEffect(() => {
    fetchThumbnails();
  }, []);

  async function fetchThumbnails() {
    const allThumbnails = await getBooks();
    setThumbnails(allThumbnails);
    setFilteredThumbnails(allThumbnails);
  }

  return (
    <div className="App">
      <NavBar
        thumbnails={thumbnails}
        setFilteredThumbnails={setFilteredThumbnails}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/grid"
          element={<Grid filteredThumbnails={filteredThumbnails} />}
        />
        <Route path="/:title" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
