import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies/:id" element={<MovieDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
