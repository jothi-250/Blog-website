import React from 'react';
import './Button.css';

function Button({ onClick, children, icon }) {
  return (
    <button className="custom-btn" onClick={onClick}>
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );
}

export default Button;