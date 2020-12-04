import Card from './Card';
import Brick from './Brick';

function Skills(props) {
  return (
    <Card
      header="Skills"
      icon="fas fa-cogs"
      body={
        <div className="d-flex flex-wrap justify-content-center">
          {props.skills.map((skill) => (
            <Brick content={skill} />
          ))}
        </div>
      }
    />
  );
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
