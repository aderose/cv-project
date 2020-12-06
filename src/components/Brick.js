import React from 'react';
import '../styles/brick.css';

function Brick(props) {
  return (
    <div className="brick rounded-pill px-3 text-white shadow-sm">
      {props.content}
      <i className="delete-brick fas fa-trash" onClick={props.onClick}></i>
    </div>
  );
}

export default Brick;
