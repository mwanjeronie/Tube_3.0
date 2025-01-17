import React, { CSSProperties } from "react";
import { User } from "../";

// interface Props {
//   onSignIn: () => void;
//   onSignOut: () => void;
//   user: User | null
// }

const headerStyle: CSSProperties = {
  padding: 8,
  backgroundColor: 'transparent',
  //color: "white",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textAlign: "center",
  position: "fixed",
  top: 50,
  left: 0,
  zIndex: 1000
};

export default function Header() {
  return (
    <header style={headerStyle}>
      
      <ul style={{ 
        listStyleType: "none", 
        display: "flex", 
        justifyContent: "center", 
        padding: 0, 
        margin: 0, 
        width: "100%" 
      }}>
        <li style={{ margin: "0 10px", color: "white", textShadow: "0 0 5px black" }}>
          <a href="#" target="_blank" style={{ color: "inherit", textDecoration: "none" }}>Explore</a>
        </li>
        <li style={{ margin: "0 10px", color: "white", textShadow: "0 0 5px black" }}>
          <a href="#" target="_blank" style={{ color: "inherit", textDecoration: "none" }}>Following</a>
        </li>
        <li style={{ margin: "0 10px", color: "white", textShadow: "0 0 5px black" }}>
          <a href="#" target="_blank" style={{ color: "inherit", textDecoration: "none" }}>For You</a>
        </li>
        
      </ul>
    {/* <div style={{ display: "flex", gap: "10px" }}>
      <button style={{ padding: "8px 16px", cursor: "pointer" }}>Explore</button>
      <button style={{ padding: "8px 16px", cursor: "pointer" }}>Following</button>
      <button style={{ padding: "8px 16px", cursor: "pointer" }}>For You</button>
    </div> */}
      
      {/* <div style={{ textAlign: "center" }}> tube 3.0</div> */}
     

      {/* <div>
        {props.user === null ? (
          <button onClick={props.onSignIn}>Sign in</button>
        ) : (
          <div>
            @{props.user.username} <button type="button" onClick={props.onSignOut}>Sign out</button>
          </div>
        )}
      </div> */}
    </header>
  );
}
