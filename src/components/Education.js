import React from 'react';
import Card from './Card';
import CardItem from './CardItem';
import Form from './Form';
import uniqid from 'uniqid';

class Education extends React.Component {
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
        name: 'School',
        type: 'text',
        isLabelled: true,
        value: index === -1 ? '' : this.state.schools[index].organisation,
      },
      {
        id: 'title',
        name: 'Title',
        type: 'text',
        isLabelled: true,
        value: index === -1 ? '' : this.state.schools[index].title,
      },
      {
        id: 'startYear',
        name: 'Start Year',
        type: 'text',
        isLabelled: true,
        value: index === -1 ? '' : this.state.schools[index].tenure.start,
      },
      {
        id: 'endYear',
        name: 'End Year',
        type: 'text',
        isLabelled: true,
        value: index === -1 ? '' : this.state.schools[index].tenure.end,
      },
      {
        id: 'description',
        name: 'Description',
        type: 'text',
        isLabelled: true,
        value: index === -1 ? '' : this.state.schools[index].description,
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
        schools: [outputJob, ...this.state.schools],
        formActive: false,
      };
    } else {
      // otherwise we are editing a specific experience object
      currentState.schools[index] = outputJob;
    }
    this.setState(currentState);
  };

  onTrash = (index) => () => {
    const currentState = this.state;
    currentState.schools.splice(index, 1);
    this.setState(currentState);
  };

  render() {
    return (
      <Card
        header="Education"
        actionIcon="fas fa-plus-circle"
        onClick={this.addForm}
        icon="fas fa-graduation-cap"
        body={
          <div>
            <Form
              inputs={this.getFormInputs(-1)}
              onSubmit={this.onSubmit(-1)}
              isActive={this.state.formActive}
              formType="add"
            />
            {this.state.schools.map((school, index) => (
              <CardItem
                inputs={this.getFormInputs(index)}
                onSubmit={this.onSubmit(index)}
                onClickTrash={this.onTrash(index)}
                organisation={school.organisation}
                tenure={school.tenure}
                title={school.title}
                description={school.description}
                key={uniqid()}
              />
            ))}
          </div>
        }
      />
    );
  }
}

Education.defaultProps = {
  schools: [
    {
      organisation: 'Exceptional Wizards School',
      tenure: { start: 2000, end: 2010 },
      title: 'BSC Magical Arts',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      organisation: 'Beginner Wizards School',
      tenure: { start: 1900, end: 2000 },
      title: 'Magicians Tests',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ],
};

export default Education;
