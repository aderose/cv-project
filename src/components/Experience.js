import Card from './Card';
import CardItem from './CardItem';

function Experience(props) {
  const jobs = (
    <div>
      <CardItem
        organisation="Magic Co."
        tenure={{ start: 2010, end: 2020 }}
        title="Magician"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <CardItem
        organisation="Magic Co."
        tenure={{ start: 2010, end: 2020 }}
        title="Magician"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <CardItem
        organisation="Magic Co."
        tenure={{ start: 2010, end: 2020 }}
        title="Magician"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
  );

  return <Card header="Experience" icon="fas fa-briefcase" body={jobs} />;
}

export default Experience;
