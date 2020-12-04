import Card from './Card';
import CardItem from './CardItem';

function Education(props) {
  return (
    <Card
      header="Education"
      icon="fas fa-graduation-cap"
      body={
        <div>
          {props.schools.map((school) => (
            <CardItem
              organisation={school.organisation}
              tenure={school.tenure}
              title={school.title}
              description={school.description}
            />
          ))}
        </div>
      }
    />
  );
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
