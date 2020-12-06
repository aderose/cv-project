import React from 'react';
import Card from './Card';
import Brick from './Brick';
import Form from './Form';
import uniqid from 'uniqid';

class Skills extends React.Component {
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
  }

  addBrick() {
    this.setState({ formActive: !this.state.formActive });
  }

  onSubmit(output) {
    this.setState({
      skills: [...this.state.skills, output.brick],
      formActive: false,
    });
  }

  render() {
    return (
      <Card
        header="Skills"
        actionIcon="fas fa-plus-circle"
        onClick={this.addBrick}
        icon="fas fa-cogs"
        body={
          <div className="d-flex flex-wrap justify-content-center">
            <Form
              inputs={this.getFormInputs(-1)}
              onSubmit={this.onSubmit}
              isActive={this.state.formActive}
            />
            {this.state.skills.map((skill) => (
              <Brick content={skill} key={uniqid()} />
            ))}
          </div>
        }
      />
    );
  }
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
