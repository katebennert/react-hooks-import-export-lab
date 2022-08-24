import React from "react";
import NavBar from './NavBar.js';
import Home from './Home.js';
import About from './About';
import { username, city, image } from '../data/user.js'

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
