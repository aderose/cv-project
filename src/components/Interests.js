import React from 'react';
import Card from './Card';
import Brick from './Brick';
import Form from './Form';
import uniqid from 'uniqid';

class Interests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props,
      formActive: false,
    };

    this.addBrick = this.addBrick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  getFormInputs(index) {
    return [
      {
        id: 'brick',
        name: 'Interest',
        type: 'text',
        isLabelled: true,
        value: index === -1 ? '' : this.state.interests[index],
      },
      {
        id: 'add',
        name: 'add',
        type: 'submit',
        isLabelled: false,
        value: index === -1 ? 'Add' : 'Update',
      },
    ];
  }

  removeBrick = (index) => () => {
    const currentState = this.state;
    this.state.interests.splice(index, 1);
    this.setState(currentState);
  };

  addBrick() {
    this.setState({ formActive: !this.state.formActive });
  }

  onSubmit(output) {
    this.setState({
      interests: [...this.state.interests, output.brick],
      formActive: false,
    });
  }

  render() {
    return (
      <Card
        header="Interests"
        actionIcon="fas fa-plus-circle"
        onClick={this.addBrick}
        icon="fas fa-lightbulb"
        body={
          <div className="d-flex flex-wrap justify-content-center">
            <Form
              inputs={this.getFormInputs(-1)}
              onSubmit={this.onSubmit}
              isActive={this.state.formActive}
              formType="add"
            />
            {this.state.interests.map((interest, index) => (
              <Brick
                content={interest}
                onClick={this.removeBrick(index)}
                key={uniqid()}
              />
            ))}
          </div>
        }
      />
    );
  }
}

Interests.defaultProps = {
  interests: ['Magic', 'Walking', 'Running', 'Reading', 'Swimming'],
};

export default Interests;
