import React, { useState } from 'react';
import Card from './Card';
import CardItem from './CardItem';
import Form from './Form';
import uniqid from 'uniqid';

function Experience(props) {
  const [isFormActive, setFormStatus] = useState(false);
  const toggleForm = () => setFormStatus(!isFormActive);

  const [jobs, setJobs] = useState([...props.jobs]);

  const getFormInputs = (index) => {
    const job = jobs[index] || {
      organisation: '',
      title: '',
      tenure: { start: '', end: '' },
      description: '',
    };

    return [
      {
        id: 'organisation',
        name: 'Company',
        type: 'text',
        isLabelled: true,
        value: job.organisation,
      },
      {
        id: 'title',
        name: 'Job Title',
        type: 'text',
        isLabelled: true,
        value: job.title,
      },
      {
        id: 'startYear',
        name: 'Start Year',
        type: 'text',
        isLabelled: true,
        value: job.tenure.start,
      },
      {
        id: 'endYear',
        name: 'End Year',
        type: 'text',
        isLabelled: true,
        value: job.tenure.end,
      },
      {
        id: 'description',
        name: 'Job Description',
        type: 'text',
        isLabelled: true,
        value: job.description,
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
    let updatedJobs = [...jobs];
    const newJob = {
      id: uniqid(),
      organisation,
      tenure: { start: startYear, end: endYear },
      title,
      description,
    };

    if (index === -1) {
      // add new job
      updatedJobs = [newJob, ...jobs];
      toggleForm();
    } else {
      // edit pre-existing job
      updatedJobs[index] = newJob;
    }
    setJobs(updatedJobs);
  };

  const removeJob = (index) => () => {
    this.setJobs(jobs.filter((_, i) => i !== index));
  };

  return (
    <Card
      header="Experience"
      actionIcon="fas fa-plus-circle"
      onClick={toggleForm}
      icon="fas fa-briefcase"
      body={
        <div>
          <Form
            inputs={getFormInputs()}
            onSubmit={submitForm(-1)}
            isActive={isFormActive}
            formType="add"
          />
          {jobs.map((job, index) => (
            <CardItem
              inputs={getFormInputs(index)}
              onSubmit={submitForm(index)}
              onClickTrash={removeJob(index)}
              organisation={job.organisation}
              tenure={job.tenure}
              title={job.title}
              description={job.description}
              key={job.id}
            />
          ))}
        </div>
      }
    />
  );
}

Experience.defaultProps = {
  jobs: [
    {
      id: uniqid(),
      organisation: 'Magic Co.',
      tenure: { start: 2017, end: 2020 },
      title: 'Senior Magician',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: uniqid(),
      organisation: 'Swindle Magicians',
      tenure: { start: 2014, end: 2017 },
      title: 'Magician',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: uniqid(),
      organisation: 'Real Magicians',
      tenure: { start: 2010, end: 2014 },
      title: 'Intern Magician',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ],
};

export default Experience;
