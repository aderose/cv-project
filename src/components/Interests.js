import Card from './Card';
import Brick from './Brick';

function Interests(props) {
  return (
    <Card
      header="Interests"
      icon="fas fa-lightbulb"
      body={
        <div className="d-flex flex-wrap justify-content-center">
          {props.interests.map((interest) => (
            <Brick content={interest} />
          ))}
        </div>
      }
    />
  );
}

Interests.defaultProps = {
  interests: ['Magic', 'Walking', 'Running', 'Reading', 'Swimming'],
};

export default Interests;
