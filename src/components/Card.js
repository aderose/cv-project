import React from 'react';
import EditButton from './EditButton';
import '../styles/card.css';

function Card(props) {
  return (
    <div className="cv-card overflow-hidden my-3 shadow-sm bg-light">
      <div className="cv-card-header bg-secondary d-flex align-items-center text-white">
        <i className={`${props.icon} card-icon`}></i>
        <strong className="text-white mr-auto">{props.header}</strong>
        <EditButton color="white" />
      </div>
      <div className="cv-card-body">{props.body}</div>
    </div>
  );
}

export default Card;
