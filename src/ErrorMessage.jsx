import React from "react";

function ErrorMessage({ message }) {
  return (
    <div style={{
      color: "#d32f2f",
      background: "#ffebee",
      borderRadius: "8px",
      padding: "1rem",
      margin: "1.5rem auto",
      maxWidth: "350px",
      textAlign: "center",
      fontWeight: "bold"
    }}>
      {message}
    </div>
  );
}

export default ErrorMessage;
