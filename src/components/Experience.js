import React from 'react';
import Card from './Card';
import CardItem from './CardItem';
import Form from './Form';
import uniqid from 'uniqid';

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props, addFormActive: false };

    this.addJobForm = this.addJobForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTrash = this.onTrash.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  getFormInputs(index) {
    return [
      {
        id: 'organisation',
        name: 'Company',
        type: 'text',
        isLabelled: true,
        value: index === -1 ? '' : this.state.jobs[index].organisation,
      },
      {
        id: 'jobTitle',
        name: 'Job Title',
        type: 'text',
        isLabelled: true,
        value: index === -1 ? '' : this.state.jobs[index].title,
      },
      {
        id: 'startYear',
        name: 'Start Year',
        type: 'text',
        isLabelled: true,
        value: index === -1 ? '' : this.state.jobs[index].tenure.start,
      },
      {
        id: 'endYear',
        name: 'End Year',
        type: 'text',
        isLabelled: true,
        value: index === -1 ? '' : this.state.jobs[index].tenure.end,
      },
      {
        id: 'jobDescription',
        name: 'Job Description',
        type: 'text',
        isLabelled: true,
        value: index === -1 ? '' : this.state.jobs[index].description,
      },
      {
        id: 'add',
        name: 'Add',
        type: 'submit',
        isLabelled: false,
        value: index === -1 ? 'Add' : 'Update',
      },
    ];
  }

  addJobForm() {
    this.setState({ addFormActive: !this.state.addFormActive });
  }

  onSubmit = (index) => ({
    organisation,
    startYear,
    endYear,
    jobTitle,
    jobDescription,
  }) => {
    let currentState = this.state;
    const outputJob = {
      id: uniqid(),
      organisation: organisation,
      tenure: { start: startYear, end: endYear },
      title: jobTitle,
      description: jobDescription,
      formActive: false,
    };

    if (index === -1) {
      // add new item in onSubmit is called with an index of -1
      currentState = {
        jobs: [outputJob, ...this.state.jobs],
        addFormActive: false,
      };
    } else {
      // otherwise we are editing a specific experience object
      currentState.jobs[index] = outputJob;
      currentState.addFormActive = false;
    }
    this.setState(currentState);
  };

  onTrash = (index) => () => {
    const currentState = this.state;
    currentState.jobs.splice(index, 1);
    this.setState(currentState);
  };

  onEdit = (index) => () => {
    const currentState = this.state;
    currentState.jobs[index].formActive = true;
    this.setState(currentState);
  };

  render() {
    return (
      <Card
        header="Experience"
        actionIcon="fas fa-plus-circle"
        onClick={this.addJobForm}
        icon="fas fa-briefcase"
        body={
          <div>
            <Form
              inputs={this.getFormInputs(-1)}
              onSubmit={this.onSubmit(-1)}
              isActive={this.state.addFormActive}
            />
            {this.state.jobs.map((job, index) => (
              <div key={`container-${job.id}`}>
                <Form
                  inputs={this.getFormInputs(index)}
                  onSubmit={this.onSubmit(index)}
                  isActive={this.state.jobs[index].formActive}
                  key={`form-${job.id}`}
                />
                <CardItem
                  organisation={job.organisation}
                  tenure={job.tenure}
                  title={job.title}
                  description={job.description}
                  key={`card-item-${job.id}`}
                  onClickTrash={this.onTrash(index)}
                  onClickEdit={this.onEdit(index)}
                />
              </div>
            ))}
          </div>
        }
      />
    );
  }
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
      formActive: false,
    },
    {
      id: uniqid(),
      organisation: 'Swindle Magicians',
      tenure: { start: 2014, end: 2017 },
      title: 'Magician',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      formActive: false,
    },
    {
      id: uniqid(),
      organisation: 'Real Magicians',
      tenure: { start: 2010, end: 2014 },
      title: 'Intern Magician',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      formActive: false,
    },
  ],
};

export default Experience;
