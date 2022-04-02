import './App.css';
import * as React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import LocationDisplay from './components/LocationDisplay'

const About = () => <div>You are on the about page</div>
const Home = () => <div>You are home</div>
const NoMatch = () => <div>No match</div>

function App() {
  return (
    <>
      <Link to="/">Home</Link>{' | '} 
      <Link to="/about">About</Link>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={ <NoMatch /> } />
      </Routes>
      <LocationDisplay />
    </>
  );
}

export default App;
