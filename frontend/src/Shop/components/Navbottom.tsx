
import React, { CSSProperties } from "react";
import { User } from "../";

interface Props {
  onSignIn: () => void;
  onSignOut: () => void;
  user: User | null
}

const headerStyle: CSSProperties = {
    padding: 8,
    backgroundColor: "rgba(113, 61, 146, 0.6)", // Slightly transparent purple
    color: "#fbb251",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
};

const buttonStyle: CSSProperties = {
    backgroundColor: "#fbb251",
    color: "rgba(113, 61, 146, 0.6)",
    border: "none",
    padding: "8px 16px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1em",
    // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    borderRadius: "4px",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
};

const buttonContainerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
};

export default function Header(props: Props) {
  return (
    <header style={headerStyle}>
    <div style={{ fontWeight: "bold", fontSize: "1.5em", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}> Tube 3.0 </div>

      <div>
        {props.user === null ? (
          <button onClick={props.onSignIn} style={buttonStyle}>Sign in</button>
        ) : (
          <div>
            @{props.user.username} <button type="button" onClick={props.onSignOut}>Sign out</button>
          </div>
        )}
      </div>
    </header>
  );
}
const navBottomStyle: CSSProperties = {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(113, 61, 146, 0.6)",
    color: "#fbb251",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "8px 0",
    zIndex: 1000,
};

const navButtonStyle: CSSProperties = {
    backgroundColor: "#fbb251",
    color: "rgba(113, 61, 146, 0.6)",
    border: "none",
    padding: "8px 16px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1em",
    borderRadius: "4px",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
};

function NavBottom() {
    return (
        <nav style={navBottomStyle}>
            <button style={navButtonStyle}>Profile</button>
            <button style={navButtonStyle}>Create</button>
            <button style={navButtonStyle}>Wallet</button>
        </nav>
    );
}

export { NavBottom };