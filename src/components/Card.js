import React from 'react';
import '../styles/card.css';

function Card(props) {
  const iconClass = `${props.icon} card-icon`;

  return (
    <div className="cv-card overflow-hidden my-3 shadow-sm bg-light">
      <div className="cv-card-header bg-secondary d-flex align-items-center text-white">
        <i className={iconClass}></i>
        <strong className="text-white mr-auto">{props.header}</strong>
        <button className="edit">
          <i className="fas fa-edit text-white"></i>
        </button>
      </div>
      <div className="cv-card-body">{props.body}</div>
    </div>
  );
}

export default Card;
