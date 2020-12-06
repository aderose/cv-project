import Card from './Card';
import Brick from './Brick';
import uniqid from 'uniqid';

function Interests(props) {
  return (
    <Card
      header="Interests"
      actionIcon="fas fa-plus-circle"
      icon="fas fa-lightbulb"
      body={
        <div className="d-flex flex-wrap justify-content-center">
          {props.interests.map((interest) => (
            <Brick content={interest} key={uniqid()} />
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
