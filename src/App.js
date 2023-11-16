import React from "react";
import NavBar from "./components/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import Grid from "./screens/Grid.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Grid />} />
      </Routes>
    </div>
  );
}

export default App;
