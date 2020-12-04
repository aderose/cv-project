import React from 'react';

function EditButton(props) {
  return (
    <button className="edit">
      <i className={`fas fa-edit text-${props.color}`}></i>
    </button>
  );
}

export default EditButton;
