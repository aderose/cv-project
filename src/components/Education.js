import Card from './Card';

function Education(props) {
  return (
    <Card header="Education" icon="fas fa-graduation-cap" body={props.body} />
  );
}

export default Education;
