import React from "react";

const formStyle: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "20px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  zIndex: 1001,
};

interface CreateFormProps {
  onClose: () => void;
}

export default function CreateForm({ onClose }: CreateFormProps) {
  return (
    <div style={formStyle}>
      <h2>Create YouTube Video View Campaign</h2>
      <form>
        <div>
          <label>Video URL:</label>
          <input type="text" />
        </div>
        <div>
          <label>Budget:</label>
          <input type="number" />
        </div>
        <div>
          <label>Duration:</label>
          <input type="text" />
        </div>
        <button type="button" onClick={onClose}>
          Close
        </button>
        <button type="submit">Create Campaign</button>
      </form>
    </div>
  );
}