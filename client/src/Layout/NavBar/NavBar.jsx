import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   <nav className="NavBar-Wrapper">
     <div>
       <h3 className="NavBar-Title">Banyan- Crypto Currency Converter</h3>
     </div>
     <div className="NavBar-Links">
      <Link to="/" className="NavBar-Link">Home</Link>
      <Link to="/to-crypto" className="NavBar-Link">To-Crypto</Link>
      <Link to="/to-currency" className="NavBar-Link">To-Currency</Link>
     </div>
   </nav>
  );
};

export default Home;
