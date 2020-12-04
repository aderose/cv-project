import React from 'react';
import '../styles/brick.css';

function Brick(props) {
  return (
    <div className="brick rounded-pill px-3 text-white shadow-sm">
      {props.content}
    </div>
  );
}

export default Brick;
