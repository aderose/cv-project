import Card from './Card';
import Brick from './Brick';

function Interests(props) {
  const body = (
    <div className="d-flex flex-wrap justify-content-center">
      <Brick content="Magic" />
      <Brick content="Walking" />
      <Brick content="Running" />
      <Brick content="Reading" />
      <Brick content="Swimming" />
    </div>
  );

  return <Card header="Interests" icon="fas fa-lightbulb" body={body} />;
}

export default Interests;
