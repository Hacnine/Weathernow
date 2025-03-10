import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SearchResults from './SearchResults';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchResults />} />
    </Routes>
    <Footer/>
  </Router>
);

export default App;
