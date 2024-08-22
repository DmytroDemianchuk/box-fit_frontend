import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';  // Ensure the correct path
import Header from './components/header/Header';  // Ensure the correct path
import Footer from './components/footer/Footer';  // Ensure the correct path
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
