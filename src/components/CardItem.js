import React, { useState } from 'react';
import Form from './Form';
import '../styles/cardItem.css';

function CardItem(props) {
  const [isformActive, setFormActive] = useState(false);

  const toggleForm = () => setFormActive(!isformActive);

  const submitForm = (output) => {
    props.onSubmit(output);
    toggleForm();
  };

  return (
    <div>
      <Form
        inputs={props.inputs}
        onSubmit={submitForm}
        isActive={isformActive}
        formType="edit"
      />
      <div className="card-item d-flex flex-wrap border-bottom mb-2 align-items-center">
        <h2 className="organisation text-left">{props.organisation}</h2>
        <i className="fas fa-edit mx-2" onClick={toggleForm}></i>
        <i className="fas fa-trash mr-auto" onClick={props.onClickTrash}></i>
        <p className="dates text-right">
          {props.tenure.start} - {props.tenure.end}
        </p>
        <p className="title w-100 font-italic text-muted">{props.title}</p>
        <p className="w-100">{props.description}</p>
      </div>
    </div>
  );
}

export default CardItem;
