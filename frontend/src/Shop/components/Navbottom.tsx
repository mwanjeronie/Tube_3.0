import React from "react";
import { FaHome, FaCompass, FaUser } from "react-icons/fa";

const navStyle: React.CSSProperties = {
  position: "fixed",
  bottom: 0,
  width: "100%",
  backgroundColor: "rgba(113, 61, 146, 1)",
  display: "flex",
  justifyContent: "space-around",
  padding: "10px 0",
  zIndex: 1000,
};

const iconStyle: React.CSSProperties = {
  color: "#fbb251",
  fontSize: "24px",
  cursor: "pointer",
};

export default function NavBottom() {
  return (
    <nav style={navStyle}>
      <div style={iconStyle}>
        <FaHome />
      </div>
      <div style={iconStyle}>
        <FaCompass />
      </div>
      <div style={iconStyle}>
        <FaUser />
      </div>
    </nav>
  );
}