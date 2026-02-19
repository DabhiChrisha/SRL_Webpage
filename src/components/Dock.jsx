import React, { useState } from 'react';
import './Dock.css';

export default function Dock({ items = [], panelHeight = 68, baseItemSize = 50, magnification = 70 }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getItemSize = (index) => {
    if (hoveredIndex === null) return baseItemSize;
    
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) {
      return baseItemSize + magnification;
    } else if (distance === 1) {
      return baseItemSize + magnification * 0.5;
    }
    return baseItemSize;
  };

  return (
    <div className="dock-container">
      <div className="dock-panel">
        {items.map((item, index) => (
          <button
            key={index}
            className="dock-item"
            style={{
              width: getItemSize(index),
              height: getItemSize(index),
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={item.onClick}
            title={item.label}
          >
            <span className="dock-item-icon">
              {item.icon}
            </span>
            <span className="dock-item-label">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
