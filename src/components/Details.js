import Card from './Card';

function Details(props) {
  return <Card header="Details" icon="fas fa-info-circle" body={props.body} />;
}

Details.defaultProps = {
  body: 'hello world',
};

export default Details;
