import React from 'react';
import Card from './Card';
import CardItem from './CardItem';
import Form from './Form';
import uniqid from 'uniqid';

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props, formActive: false };

    this.addForm = this.addForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTrash = this.onTrash.bind(this);
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
        id: 'title',
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
        id: 'description',
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

  addForm() {
    this.setState({ formActive: !this.state.formActive });
  }

  onSubmit = (index) => ({
    organisation,
    startYear,
    endYear,
    title,
    description,
  }) => {
    let currentState = this.state;
    const outputJob = {
      id: uniqid(),
      organisation,
      tenure: { start: startYear, end: endYear },
      title,
      description,
    };

    if (index === -1) {
      // add new item in onSubmit is called with an index of -1
      currentState = {
        jobs: [outputJob, ...this.state.jobs],
        formActive: false,
      };
    } else {
      // otherwise we are editing a specific experience object
      currentState.jobs[index] = outputJob;
    }
    this.setState(currentState);
  };

  onTrash = (index) => () => {
    const currentState = this.state;
    currentState.jobs.splice(index, 1);
    this.setState(currentState);
  };

  render() {
    return (
      <Card
        header="Experience"
        actionIcon="fas fa-plus-circle"
        onClick={this.addForm}
        icon="fas fa-briefcase"
        body={
          <div>
            <Form
              inputs={this.getFormInputs(-1)}
              onSubmit={this.onSubmit(-1)}
              isActive={this.state.formActive}
              formType="add"
            />
            {this.state.jobs.map((job, index) => (
              <CardItem
                inputs={this.getFormInputs(index)}
                onSubmit={this.onSubmit(index)}
                onClickTrash={this.onTrash(index)}
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
