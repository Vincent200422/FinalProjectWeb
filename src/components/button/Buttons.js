import React from 'react';

function Buttons({
  children,
  classNames = '',
  background = 'transparent',
  color = 'black',
  border = 'none',
  borderRadius = '0px',
  fontSize = '16px'
}) {
  return (
    <button 
      className={classNames}
      style={{
        background: background,
        color: color,
        border: border,
        borderRadius: borderRadius,
        fontSize: fontSize
      }}
    >
      {children}
    </button>
  );
}

export default Buttons;
