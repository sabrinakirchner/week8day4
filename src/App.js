import React from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Article from './Components/Article';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
