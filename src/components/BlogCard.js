import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ id, title, description }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        marginBottom: "10px",
        borderRadius: "12px",
        width: "100%",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}
    >
      <h2 style={{ color: "#2c3e50", marginBottom: "10px" }}>{title}</h2>
      <p style={{ color: "#555", marginBottom: "10px" }}>{description}</p>
      <Link to={`/blog/${id}`}>
  <span
    style={{
      color: "#6c63ff",
      fontWeight: "bold",
      cursor: "pointer"
    }}
  >
    Read more →
  </span>
</Link>
    </div>
  );
}

export default BlogCard;