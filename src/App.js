import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getBooks } from "./services/books.js";
import { verifyUser } from "./services/users.js";
import NavBar from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
import Grid from "./screens/Grid.jsx";
import Book from "./screens/Book.jsx";
import SignUp from "./screens/SignUp/SignUp.jsx";
import SignIn from "./screens/SignIn/SignIn.jsx";
import SignOut from "./screens/SignOut/SignOut.jsx";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);
  const [filteredThumbnails, setFilteredThumbnails] = useState([]);

  useEffect(() => {
    fetchUser();
    fetchThumbnails();
  }, []);

  async function fetchUser() {
    const userData = await verifyUser();
    userData ? setUser(userData) : setUser(null);
  }

  async function fetchThumbnails() {
    const allThumbnails = await getBooks();
    setThumbnails(allThumbnails);
    setFilteredThumbnails(allThumbnails);
  }

  return (
    <div className="App">
      <NavBar
        user={user}
        thumbnails={thumbnails}
        setFilteredThumbnails={setFilteredThumbnails}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/grid"
          element={<Grid filteredThumbnails={filteredThumbnails} />}
        />
        <Route path="/:bookId" element={<Book />} />
        <Route path="/sign-up" element={<SignUp setUser={setUser} />} />
        <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
        <Route path="/sign-out" element={<SignOut setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
