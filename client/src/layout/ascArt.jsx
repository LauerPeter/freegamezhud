

import React from "react";


function ASCIIArt() {
  return (
    <div style={asciiArtContainer}>
      <pre style={asciiArtStyles}>
      {`
___________________________    ____
| _________/_______    /  |    |  |
| |_______| /      \\__/|  |    |  |
|  _______/ |   _______|  |____|  |
| |       | |   |_____ /   ____   |
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
  backgroundColor: '#3498DB',
  color: '#ECF0F1',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
};


export default ASCIIArt;
