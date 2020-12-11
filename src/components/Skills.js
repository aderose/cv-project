import React, { useState } from 'react';
import Card from './Card';
import Brick from './Brick';
import Form from './Form';
import uniqid from 'uniqid';

function Skills(props) {
  const [isFormActive, setFormStatus] = useState(false);
  const toggleForm = () => setFormStatus(!isFormActive);
  const [skills, setSkills] = useState(props.skills);

  const getFormInputs = (index) => [
    {
      id: 'brick',
      name: 'Skill',
      type: 'text',
      isLabelled: true,
      value: index === -1 ? '' : this.state.skills[index],
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
    setSkills(skills.filter((_, ind) => ind !== index));
  };

  const submitForm = (output) => {
    setSkills([...skills, output.brick]);
    toggleForm();
  };

  return (
    <Card
      header="Skills"
      actionIcon="fas fa-plus-circle"
      onClick={toggleForm}
      icon="fas fa-cogs"
      body={
        <div className="d-flex flex-wrap justify-content-center">
          <Form
            inputs={getFormInputs(-1)}
            onSubmit={submitForm}
            isActive={isFormActive}
            formType="add"
          />
          {skills.map((skill, index) => (
            <Brick
              content={skill}
              onClick={removeBrick(index)}
              key={uniqid()}
            />
          ))}
        </div>
      }
    />
  );
}

Skills.defaultProps = {
  skills: [
    'Levitation',
    'Alchemy',
    'Necromancy',
    'Spell Casting',
    'Elemental Magic',
    'Chaos Magic',
    'Dark Arts',
    'Absorption Magic',
    'Conjuration',
    'Divination',
    'Enchantment',
    'Illusion',
  ],
};

export default Skills;
