import React from 'react';
import Card from './Card';
import Brick from './Brick';
import uniqid from 'uniqid';

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formActive: false,
    };
  }

  render() {
    return (
      <Card
        header="Skills"
        actionIcon="fas fa-plus-circle"
        icon="fas fa-cogs"
        body={
          <div className="d-flex flex-wrap justify-content-center">
            {this.props.skills.map((skill) => (
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
