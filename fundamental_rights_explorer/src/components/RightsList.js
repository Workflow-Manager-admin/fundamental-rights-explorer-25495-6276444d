import React from "react";
import rightsData from "../rightsData";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Renders a list of fundamental rights as large, clickable buttons.
 * Each button navigates to the detail page of the corresponding right.
 */
function RightsList() {
  return (
    <div className="hero">
      <div className="subtitle">Explore India's Fundamental Rights</div>
      <h1 className="title">Fundamental Rights Explorer</h1>
      <div className="description">
        Select a Fundamental Right to learn more, explore real-life cases, and test your knowledge!
      </div>
      <div
        style={{
          marginTop: 32,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          width: "100%",
          maxWidth: 400,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {rightsData.map((right) => (
          <Link
            to={`/right/${right.id}`}
            key={right.id}
            className="btn btn-large"
            style={{
              textAlign: "left",
              fontWeight: 600,
              textDecoration: "none",
              color: "inherit"
            }}
            aria-label={`View details for ${right.name}`}
          >
            {right.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RightsList;
