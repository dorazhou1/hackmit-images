import React from "react";
import './style/result.css'
import { useNavigate, useLocation } from "react-router-dom";
import happywhale from './style/HappyWhale.gif'

export function Finish() {
  const navigate = useNavigate();
  const location = useLocation();

  const { score } = location.state || {};
  const { imageCount } = location.state || {};

  console.log("image count in done", imageCount)


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
        <div className="container">
        <div className="title bubblefont">
        <img src={happywhale} alt="Description of the image" />
          <p>YOU'RE DONE!</p>
          <p>Final score: {score} / {imageCount}</p>
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
      </div>
    </>
  );
}
