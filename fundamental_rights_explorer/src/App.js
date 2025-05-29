import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import RightsList from './components/RightsList';
import RightDetail from './components/RightDetail';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Link to="/" className="logo" style={{ textDecoration: "none", color: "inherit" }}>
              <span className="logo-symbol">*</span> KAVIA AI
            </Link>
            <a
              href="https://kavia.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              About KAVIA
            </a>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<RightsList />} />
            <Route path="/right/:id" element={<RightDetail />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;