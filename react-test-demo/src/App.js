import './App.css';
import * as React from 'react'
import { Provider } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom'
import LocationDisplay from './components/LocationDisplay'
import About from './pages/About';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Users from './pages/Users';
import Login from './pages/Login';
import store from './store/Store';
import UserDetails from './pages/UserDetails';
import 'milligram';
import "./i18n";

function App() {
  return (
    <Provider store={store}>
      <Link to="/">Home</Link>{' | '} 
      <Link to="/login">Login</Link>{' | '} 
      <Link to="/about">About</Link>{' | '} 
      <Link to="/users">Users</Link>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/userDetails" element={<UserDetails />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <LocationDisplay />
    </Provider>
  );
}

export default App;
