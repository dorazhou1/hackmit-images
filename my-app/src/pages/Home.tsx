import { ReactNode } from "react";
import oceanBackground from './style/home-page-ocean-background.gif';
import React from "react";
import 
// Game Main Page

export function Home() {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(${oceanBackground})`, // Corrected path and use of template literals
          backgroundSize: 'cover',
          height: '100vh', // Ensure it covers the viewport height
          width: '100%', // Ensure it spans the full width
          display: 'flex', // Optional: use flexbox to center content
          alignItems: 'center', // Optional: center items vertically
          justifyContent: 'center' // Optional: center items horizontally
        }}
      >
        <h1 style={{ fontFamily: 'Arial', fontSize: '5rem', color: 'navy' }}>
          Deep Sea Deepfake Discovery!
        </h1>
      </div>
    </React.Fragment>
  );
}

