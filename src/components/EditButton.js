import React from 'react';

function EditButton(props) {
  return (
    <button className="edit" onClick={props.onClick}>
      <i className={`fas fa-edit text-${props.color}`}></i>
    </button>
  );
}

export default EditButton;
