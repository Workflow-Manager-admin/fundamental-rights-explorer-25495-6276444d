import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import RightsList from './components/RightsList';

// Placeholder (to be replaced with real data and logic)
function RightDetail() {
  // In real logic, would access route param & load matching right's data
  return (
    <div className="hero">
      <div className="subtitle">Right Detail Page</div>
      <h1 className="title">[Right Name Here]</h1>
      <div className="description">
        This is where you will see details about the selected fundamental right.<br />
        (Explanation, Real-life Example/Case, and Quiz will be shown here.)
      </div>
      <Link to="/" className="btn" style={{ marginTop: 32 }}>← Back to All Rights</Link>
    </div>
  );
}

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