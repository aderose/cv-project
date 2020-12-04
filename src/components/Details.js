import Card from './Card';
import '../styles/details.css';

function Details(props) {
  const body = (
    <div className="d-flex flex-wrap mx-auto">
      <p>{props.description}</p>
      <div className="description-link">
        <i className="fas fa-mobile-alt"></i>
        {props.phone}
      </div>
      <div className="description-link">
        <i className="far fa-envelope"></i>
        {props.email}
      </div>
      <div className="description-link">
        <i className="fab fa-linkedin"></i>
        <a href={`https://linkedin.com/in/${props.linkedin}`}>
          {props.linkedin}
        </a>
      </div>
      <div className="description-link">
        <i className="fab fa-github"></i>
        <a href={`https://github.com/${props.github}`}>{props.github}</a>
      </div>
    </div>
  );

  function onClick(event) {
    console.log(event.target);
  }

  return (
    <Card
      header="Details"
      icon="fas fa-info-circle"
      body={body}
      onClick={onClick}
    />
  );
}

Details.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet tortor eget turpis fringilla malesuada. Cras vulputate vitae sapien sed pellentesque. In at egestas.',
  phone: '+44 7123 456 789',
  email: 'j.smith@gmail.com',
  linkedin: 'j-smith',
  github: 'jsmith',
};

export default Details;
