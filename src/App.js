import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home.js';
import Contact from './Pages/Contact.js';
import About from './Pages/AboutMe.js';
import Education from './Pages/Education.js';
import Projects from './Pages/Projects.js';
import Experience from './Pages/Experience.js';

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
        <div className="profile-container">
          <img 
            src="/Images/profile_image.png" 
            alt="Heidi Spalitta" 
            className="profile-picture" 
          />
        </div>
          <Link to="/" className="item"><top>Heidi Spalitta</top></Link>
          <Link to="/about"><custom>About Me Deluxe</custom></Link>
          <Link to="/education"><custom>Education</custom></Link>
          <Link to="/experience"><custom>Experience</custom></Link>
          <Link to="/projects"><custom>Projects</custom></Link>
          <Link to="/contact" className="item contact-link"><custom>Contact Me</custom></Link>
        </nav>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
