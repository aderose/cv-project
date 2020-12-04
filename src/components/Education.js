import Card from './Card';
import CardItem from './CardItem';

function Education(props) {
  const schools = (
    <div>
      <CardItem
        organisation="Exceptional Wizards School"
        tenure={{ start: 2000, end: 2010 }}
        title="BSC Magical Arts"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <CardItem
        organisation="Beginner Wizards School"
        tenure={{ start: 1900, end: 2000 }}
        title="Magicians Tests"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
  );

  return (
    <Card header="Education" icon="fas fa-graduation-cap" body={schools} />
  );
}

export default Education;
