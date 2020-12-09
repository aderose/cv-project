import React, { useState } from 'react';
import Card from './Card';
import Form from './Form';
import '../styles/details.css';

function Details(props) {
  const [isFormActive, setFormStatus] = useState(false);
  const toggleForm = () => setFormStatus(!isFormActive);

  // initialise details provided through props
  const [
    { description, phone, email, linkedin, github },
    setDetails,
  ] = useState({ ...props });

  const getFormInputs = () => [
    {
      id: 'description',
      name: 'Description',
      type: 'text',
      isLabelled: true,
      value: description,
    },
    {
      id: 'phone',
      name: 'Phone Number',
      type: 'text',
      isLabelled: true,
      value: phone,
    },
    {
      id: 'email',
      name: 'Email',
      type: 'text',
      isLabelled: true,
      value: email,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Username',
      type: 'text',
      isLabelled: true,
      value: linkedin,
    },
    {
      id: 'github',
      name: 'GitHub Username',
      type: 'text',
      isLabelled: true,
      value: github,
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
    setDetails({ ...output });
    toggleForm();
  };

  return (
    <Card
      header="Details"
      actionIcon="fas fa-edit"
      icon="fas fa-info-circle"
      body={
        <div className="d-flex flex-wrap mx-auto">
          <Form
            inputs={getFormInputs()}
            onSubmit={submitForm}
            isActive={isFormActive}
            formType="edit"
          />
          <p>{description}</p>
          <div className="description-link">
            <i className="fas fa-mobile-alt text-secondary"></i>
            {phone}
          </div>
          <div className="description-link">
            <i className="far fa-envelope text-secondary"></i>
            {email}
          </div>
          <div className="description-link">
            <i className="fab fa-linkedin text-secondary"></i>
            <a href={`https://linkedin.com/in/${linkedin}`}>{linkedin}</a>
          </div>
          <div className="description-link">
            <i className="fab fa-github text-secondary"></i>
            <a href={`https://github.com/${github}`}>{github}</a>
          </div>
        </div>
      }
      onClick={toggleForm}
    />
  );
}

Details.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet tortor eget turpis fringilla malesuada. Cras vulputate vitae sapien sed pellentesque. In at egestas.',
  phone: '+44 7123 456 789',
  email: 'jsmith99@gmail.com',
  linkedin: 'jsmith99',
  github: 'jsmith99',
};

export default Details;
