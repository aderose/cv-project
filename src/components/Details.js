import React, { useState } from 'react';
import Card from './Card';
import Form from './Form';
import '../styles/details.css';

function Details(props) {
  const [isFormActive, setFormStatus] = useState(false);
  const toggleForm = () => setFormStatus(!isFormActive);

  // initialise details provided through props
  const [details, setDetails] = useState({ ...props });

  const getFormInputs = () => [
    {
      id: 'description',
      name: 'Description',
      type: 'text',
      isLabelled: true,
      value: details.description,
    },
    {
      id: 'phone',
      name: 'Phone Number',
      type: 'text',
      isLabelled: true,
      value: details.phone,
    },
    {
      id: 'email',
      name: 'Email',
      type: 'text',
      isLabelled: true,
      value: details.email,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Username',
      type: 'text',
      isLabelled: true,
      value: details.linkedin,
    },
    {
      id: 'github',
      name: 'GitHub Username',
      type: 'text',
      isLabelled: true,
      value: details.github,
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
          <p>{details.description}</p>
          <div className="description-link">
            <i className="fas fa-mobile-alt text-secondary"></i>
            {details.phone}
          </div>
          <div className="description-link">
            <i className="far fa-envelope text-secondary"></i>
            {details.email}
          </div>
          <div className="description-link">
            <i className="fab fa-linkedin text-secondary"></i>
            <a href={`https://linkedin.com/in/${details.linkedin}`}>
              {details.linkedin}
            </a>
          </div>
          <div className="description-link">
            <i className="fab fa-github text-secondary"></i>
            <a href={`https://github.com/${details.github}`}>
              {details.github}
            </a>
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
