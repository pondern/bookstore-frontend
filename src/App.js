import React from 'react';
import NavBar from './components/Nav.jsx'; 
import "./App.css"
import Home from './screens/Home.jsx';


function App() {
  return (
    <div className="App">
      <NavBar />
      < Home />
      {/* Other components and content */}
    </div>
  );
}

export default App;
