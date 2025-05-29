import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

// Placeholder (to be moved into separate files later)
function RightsList() {
  return (
    <div className="hero">
      <div className="subtitle">Explore India's Fundamental Rights</div>
      <h1 className="title">Fundamental Rights Explorer</h1>
      <div className="description">
        Select a Fundamental Right to learn more, explore real-life cases, and test your knowledge!
      </div>
      <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
        {/* These will later be generated dynamically from data */}
        <Link to="/right/right-to-equality" className="btn btn-large">Right to Equality</Link>
        <Link to="/right/right-to-freedom" className="btn btn-large">Right to Freedom</Link>
        <Link to="/right/right-against-exploitation" className="btn btn-large">Right Against Exploitation</Link>
      </div>
    </div>
  );
}

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