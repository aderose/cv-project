import React, { useState } from 'react';
import CardAction from './CardAction';
import Form from './Form';

function Title(props) {
  const [isFormActive, setFormStatus] = useState(false);
  const toggleForm = () => setFormStatus(!isFormActive);
  const [name, setName] = useState(props.name);
  const [title, setTitle] = useState(props.title);

  const getFormInputs = () => [
    {
      id: 'name',
      name: 'Full Name',
      type: 'text',
      isLabelled: true,
      value: name,
    },
    {
      id: 'title',
      name: 'Job Title',
      type: 'text',
      isLabelled: true,
      value: title,
    },
    {
      id: 'update',
      name: 'update',
      type: 'submit',
      isLabelled: false,
      value: 'Update',
    },
  ];

  const submitForm = (output) => {
    setName(output.name);
    setTitle(output.title);
    toggleForm();
  };

  return (
    <div className="text-center border-bottom">
      <Form
        inputs={getFormInputs()}
        onSubmit={submitForm}
        isActive={isFormActive}
        formType="edit"
      />
      <div className="d-flex justify-content-center align-items-start">
        <h1 className="text-uppercase text-black-75">{name}</h1>
        <CardAction
          actionIcon="fas fa-edit"
          color="black"
          onClick={toggleForm}
        />
      </div>
      <p className="text-muted font-italic text-capitalize">{title}</p>
    </div>
  );
}

Title.defaultProps = {
  name: 'John Smith',
  title: 'Magician',
};

export default Title;
