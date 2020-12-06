import React from 'react';
import CardAction from './CardAction';
import '../styles/card.css';

function Card(props) {
  return (
    <div className="cv-card overflow-hidden my-3 shadow-sm bg-light">
      <div className="cv-card-header d-flex align-items-center text-white">
        <i className={`${props.icon} card-icon`}></i>
        <strong className="text-white mr-auto">{props.header}</strong>
        <CardAction
          actionIcon={props.actionIcon}
          color="white"
          onClick={props.onClick}
        />
      </div>
      <div className="cv-card-body">{props.body}</div>
    </div>
  );
}

export default Card;
