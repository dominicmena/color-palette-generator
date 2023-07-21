// src/components/ColorPalette.js
import React from 'react';

const ColorPalette = ({ colors }) => {
  return (
    <div className="color-palette-container">
      <div className="color-palette">
        {colors.map((color, index) => (
          <div key={index} className="color-box">
            <div className="color-square" style={{ backgroundColor: color }}></div>
            <div className="color-code">{color}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
