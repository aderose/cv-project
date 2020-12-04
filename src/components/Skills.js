import Card from './Card';
import Brick from './Brick';

function Skills(props) {
  const body = (
    <div className="d-flex flex-wrap justify-content-center">
      <Brick content="Levitation" />
      <Brick content="Alchemy" />
      <Brick content="Necromancy" />
      <Brick content="Spell Casting" />
      <Brick content="Elemental" />
      <Brick content="Chaos" />
      <Brick content="Dark Arts" />
      <Brick content="Absorption" />
      <Brick content="Conjuration" />
      <Brick content="Divination" />
      <Brick content="Enchantment" />
      <Brick content="Illusion" />
    </div>
  );

  return <Card header="Skills" icon="fas fa-cogs" body={body} />;
}

export default Skills;
