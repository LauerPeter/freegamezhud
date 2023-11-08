

import React from "react";
import "./Header.css"


function ASCIIArt() {
  return (
    <div style={asciiArtContainer}>
      <pre style={asciiArtStyles}>
      {`
___________________________    ____
| _________/_______    /  |    |  |
| |_______| /      \\__/|  |    |  |
|  _______/ |   _______|  |____|  |
| |       | |   (_____ /   ____   |
| |       | |_______/ /|  |    |  |
|_|       \\__________/ |__|    |__|
    `}
    </pre>
   </div> 
  );
}

const asciiArtContainer = {
  maxWidth: '100%',
};

const asciiArtStyles = {
  fontFamily: 'monospace',
  borderRadius: '10px',
};


export default ASCIIArt;
