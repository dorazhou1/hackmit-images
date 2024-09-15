import { ReactNode } from "react";
import oceanBackground from './style/oceangif.gif';
import React from "react";
import './style/bubblefont.css'
// Game Main Page

export function Home() {
  return (
    <React.Fragment>
      <div 
        className="sniglet-extrabold"
        style={{
          backgroundImage: `url(${oceanBackground})`, // Corrected path and use of template literals
          backgroundSize: 'cover',
          height: '100vh', // Ensure it covers the viewport height
          width: '100%', // Ensure it spans the full width
          display: 'flex', // Optional: use flexbox to center content
          flexDirection: 'column',
          alignItems: 'center', // Optional: center items vertically
          justifyContent: 'center' // Optional: center items horizontally
        }}
      >
        <h1 style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)',
        color: 'rgb(173,216,230)',
        fontSize: '6rem',
        textAlign: 'center',
        borderRadius: '60px',
        padding: '20px', // Adjust padding to fit your design
        maxWidth: '90%', // Limit the width to prevent stretching
        boxSizing: 'border-box', // Include padding and border in element’s total width and height
        textShadow: '2px 2px 0 rgba(0, 0, 0, 0.8), -2px -2px 0 rgba(0, 0, 0, 0.8), 2px -2px 0 rgba(0, 0, 0, 0.8), -2px 2px 0 rgba(0, 0, 0, 0.8)',
        }}>
        Deep Sea Deepfake Discovery!
        </h1>

        <button style={{ fontFamily: "Arial",
        marginTop: '20px', // Space between the text and button
        padding: '10px 20px', // Padding inside the button
        fontSize: '3rem', // Font size of the button text
        color: 'white',
        backgroundColor: 'navy',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
        }}>
        Play now
      </button>
      </div>
    </React.Fragment>
  );
}

