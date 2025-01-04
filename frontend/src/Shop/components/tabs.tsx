import React, { CSSProperties, useState } from "react";
import { User } from "../";

interface Props {
    onSignIn: () => void;
    onSignOut: () => void;
    user: User | null;
}

const headerStyle: CSSProperties = {
    padding: 8,
    backgroundColor: 'transparent',
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

const tabStyle: CSSProperties = {
    margin: "0 10px",
    color: "white",
    textShadow: "0 0 5px black",
    cursor: "pointer"
};

const activeTabStyle: CSSProperties = {
    ...tabStyle,
    borderBottom: "2px solid white"
};

export default function Header(props: Props) {
    const [activeTab, setActiveTab] = useState<string>("Explore");

    const tabs = ["Explore", "Following", "For You"];

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
                {tabs.map(tab => (
                    <li 
                        key={tab} 
                        style={activeTab === tab ? activeTabStyle : tabStyle} 
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </li>
                ))}
            </ul>
        </header>
    );
}