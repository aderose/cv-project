import React, { useState } from 'react';
import Card from './Card';
import Brick from './Brick';
import Form from './Form';
import uniqid from 'uniqid';

function Interests(props) {
  const [isFormActive, setFormStatus] = useState(false);
  const toggleForm = () => setFormStatus(!isFormActive);
  const [interests, setInterests] = useState(props.interests);

  const getFormInputs = (index) => [
    {
      id: 'brick',
      name: 'Interest',
      type: 'text',
      isLabelled: true,
      value: index === -1 ? '' : interests[index],
    },
    {
      id: 'add',
      name: 'add',
      type: 'submit',
      isLabelled: false,
      value: index === -1 ? 'Add' : 'Update',
    },
  ];

  const removeBrick = (index) => () => {
    setInterests(interests.filter((_, ind) => ind !== index));
  };

  const onSubmit = (output) => {
    setInterests([...interests, output.brick]);
    toggleForm();
  };

  return (
    <Card
      header="Interests"
      actionIcon="fas fa-plus-circle"
      onClick={toggleForm}
      icon="fas fa-lightbulb"
      body={
        <div className="d-flex flex-wrap justify-content-center">
          <Form
            inputs={getFormInputs(-1)}
            onSubmit={onSubmit}
            isActive={isFormActive}
            formType="add"
          />
          {interests.map((interest, index) => (
            <Brick
              content={interest}
              onClick={removeBrick(index)}
              key={uniqid()}
            />
          ))}
        </div>
      }
    />
  );
}

Interests.defaultProps = {
  interests: ['Magic', 'Walking', 'Running', 'Reading', 'Swimming'],
};

export default Interests;
