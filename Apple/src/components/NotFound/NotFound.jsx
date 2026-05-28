import React from "react";
import { useNavigate } from "react-router";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">Page Not Found</h1>
      <h2 className="notfound-subtitle">
        The page you are looking for doesn't exist.
      </h2>
      <div className="notfound-buttons">
        <button onClick={() => navigate(-1)} className="outline">Go Back</button>
      </div>
    </div>
  );
}

export default NotFound;