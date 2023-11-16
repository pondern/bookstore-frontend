import React from "react";
import NavBar from "./components/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import Grid from "./screens/Grid.jsx";
import Book from "./screens/Book.jsx";
import "./App.css";
import Home from "./screens/Home.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/:title" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
