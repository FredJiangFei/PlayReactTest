import './App.css';
import * as React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import LocationDisplay from './components/LocationDisplay'
import About from './pages/About';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Users from './pages/Users';

function App() {
  return (
    <>
      <Link to="/">Home</Link>{' | '} 
      <Link to="/about">About</Link>{' | '} 
      <Link to="/users">Users</Link>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <LocationDisplay />
    </>
  );
}

export default App;
