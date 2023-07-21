// src/App.js
import React, { useState } from 'react';
import randomcolor from 'randomcolor';
import ColorPalette from './components/ColorPalette';
import './App.css';

const App = () => {
  const [paletteColors, setPaletteColors] = useState([]);

  const generatePalette = () => {
    const newColors = randomcolor({ count: 5 }); // Generate 5 random colors for the palette
    setPaletteColors(newColors);
  };

  return (
    <div className="app">
      <h1>Color Palette Generator</h1>
      <button onClick={generatePalette}>Generate Palette</button>
      {paletteColors.length > 0 && <ColorPalette colors={paletteColors} />}
    </div>
  );
};

export default App;
