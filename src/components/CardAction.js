import React from 'react';

function CardAction(props) {
  return (
    <button className="card-action" onClick={props.onClick}>
      <i className={`${props.actionIcon} text-${props.color}`}></i>
    </button>
  );
}

export default CardAction;
