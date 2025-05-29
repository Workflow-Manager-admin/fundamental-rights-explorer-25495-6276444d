import React from "react";
import { useParams, Link } from "react-router-dom";
import rightsData from "../rightsData";

/**
 * PUBLIC_INTERFACE
 * RightDetail component – displays the detail page for a fundamental right.
 * Shows name, explanation, example/case, and placeholder for quiz.
 * Fetches the correct right by URL param ("id").
 */
function RightDetail() {
  const { id } = useParams();
  const right = rightsData.find((r) => r.id === id);

  if (!right) {
    return (
      <div className="hero">
        <div className="subtitle">Right Not Found</div>
        <div className="description">
          The selected fundamental right does not exist.<br/>
          <Link to="/" className="btn" style={{ marginTop: 32 }}>← Back to All Rights</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="hero">
      <div className="subtitle">Fundamental Right Detail</div>
      <h1 className="title">{right.name}</h1>

      <div
        className="description"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid var(--border-color)",
          borderRadius: 8,
          padding: 24,
          marginBottom: 24,
          marginTop: 24,
          color: "var(--text-color)",
          maxWidth: 600,
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0 2px 10px rgba(0,0,0,0.03)"
        }}
      >
        <strong>Explanation:</strong> <br />{right.explanation}
      </div>

      <div
        className="description"
        style={{
          background: "rgba(255,255,255,0.07)",
          border: "1px dashed var(--kavia-orange)",
          borderRadius: 8,
          padding: 20,
          marginBottom: 32,
          color: "var(--text-secondary)",
          maxWidth: 600,
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <strong>Example / Landmark Case:</strong> <br />{right.example}
      </div>

      <div
        className="description"
        style={{
          background: "rgba(232,122,65,0.08)",
          border: "1px solid var(--kavia-orange)",
          borderRadius: 8,
          padding: 20,
          marginBottom: 32,
          color: "var(--kavia-orange)",
          maxWidth: 600,
          marginLeft: "auto",
          marginRight: "auto"
        }}
        aria-label="Quiz Section"
      >
        <strong>Quiz:</strong> <br />
        <em>Quiz coming soon! (This will test your knowledge with multiple choice questions.)</em>
      </div>

      <Link to="/" className="btn" style={{ marginTop: 32 }}>
        ← Back to All Rights
      </Link>
    </div>
  );
}

export default RightDetail;
