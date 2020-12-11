import React, { useState } from 'react';
import Card from './Card';
import CardItem from './CardItem';
import Form from './Form';
import uniqid from 'uniqid';

function Education(props) {
  const [isFormActive, setFormStatus] = useState(false);
  const toggleForm = () => setFormStatus(!isFormActive);
  const [schools, setSchools] = useState([...props.schools]);

  const getFormInputs = (index) => {
    const school = schools[index] || {
      organisation: '',
      title: '',
      tenure: { start: '', end: '' },
      description: '',
    };

    return [
      {
        id: 'organisation',
        name: 'School',
        type: 'text',
        isLabelled: true,
        value: school.organisation,
      },
      {
        id: 'title',
        name: 'Title',
        type: 'text',
        isLabelled: true,
        value: school.title,
      },
      {
        id: 'startYear',
        name: 'Start Year',
        type: 'text',
        isLabelled: true,
        value: school.tenure.start,
      },
      {
        id: 'endYear',
        name: 'End Year',
        type: 'text',
        isLabelled: true,
        value: school.tenure.end,
      },
      {
        id: 'description',
        name: 'Description',
        type: 'text',
        isLabelled: true,
        value: school.description,
      },
      {
        id: 'add',
        name: 'Add',
        type: 'submit',
        isLabelled: false,
        value: index >= 0 ? 'Update' : 'Add',
      },
    ];
  };

  const submitForm = (index) => ({
    organisation,
    startYear,
    endYear,
    title,
    description,
  }) => {
    let updatedSchools = [...schools];
    const newSchool = {
      id: uniqid(),
      organisation,
      tenure: { start: startYear, end: endYear },
      title,
      description,
    };

    if (index === -1) {
      // add new school
      updatedSchools = [newSchool, ...schools];
      toggleForm();
    } else {
      // otherwise we are editing a specific experience object
      updatedSchools[index] = newSchool;
    }
    setSchools(updatedSchools);
  };

  const removeSchool = (index) => () => {
    setSchools(schools.filter((_, i) => i !== index));
  };

  return (
    <Card
      header="Education"
      actionIcon="fas fa-plus-circle"
      onClick={toggleForm}
      icon="fas fa-graduation-cap"
      body={
        <div>
          <Form
            inputs={getFormInputs()}
            onSubmit={submitForm(-1)}
            isActive={isFormActive}
            formType="add"
          />
          {schools.map((school, index) => (
            <CardItem
              inputs={getFormInputs(index)}
              onSubmit={submitForm(index)}
              onClickTrash={removeSchool(index)}
              organisation={school.organisation}
              tenure={school.tenure}
              title={school.title}
              description={school.description}
              key={school.id}
            />
          ))}
        </div>
      }
    />
  );
}

Education.defaultProps = {
  schools: [
    {
      organisation: 'Exceptional Wizards School',
      tenure: { start: 2000, end: 2010 },
      title: 'BSC Magical Arts',
      id: uniqid(),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      organisation: 'Beginner Wizards School',
      tenure: { start: 1900, end: 2000 },
      title: 'Magicians Tests',
      id: uniqid(),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ],
};

export default Education;
