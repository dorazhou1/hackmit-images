import React from "react";
import "./style/home.css";
import happywhale from "./style/HappyWhale.gif";
import { useNavigate } from "react-router-dom";

export function Won() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/test");
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#a7e4fa",
          backgroundImage: "url(./bubbles.png)",
          height: "100vh",
          padding: "10%",
        }}
      >
        <div className="sniglet-extrabold">
          <p>YOU WON!</p>
        </div>
        <button
          className="pulse-button"
          onClick={handleClick}
          style={{
            marginTop: "20px", // Space between the text and button
            padding: "10px 20px", // Padding inside the button
            fontSize: "3rem", // Font size of the button text
            color: "white",
            backgroundColor: "navy",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Play Again?
        </button>
      </div>
    </>
  );
}
