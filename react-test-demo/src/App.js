import './App.css';
import * as React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import LocationDisplay from './components/LocationDisplay'
import About from './pages/About';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <>
      <Link to="/">Home</Link>{' | '} 
      <Link to="/about">About</Link>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <LocationDisplay />
    </>
  );
}

export default App;
