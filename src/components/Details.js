import Card from './Card';
import Form from './Form';
import '../styles/details.css';

function Details(props) {
  function onClick(event) {
    console.log(event.target);
  }

  function onSubmit(values) {
    console.log(values);
  }

  const formInputs = [
    {
      id: 'description',
      name: 'Description',
      type: 'text',
      isLabelled: true,
    },
    {
      id: 'phoneNumber',
      name: 'Phone Number',
      type: 'text',
      isLabelled: true,
    },
    {
      id: 'email',
      name: 'Email',
      type: 'text',
      isLabelled: true,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      type: 'text',
      isLabelled: true,
    },
    {
      id: 'github',
      name: 'GitHub',
      type: 'text',
      isLabelled: true,
    },
    {
      id: 'update',
      name: 'update',
      type: 'submit',
      isLabelled: false,
      value: 'Update',
    },
  ];

  return (
    <Card
      header="Details"
      icon="fas fa-info-circle"
      body={
        <div className="d-flex flex-wrap mx-auto">
          <Form inputs={formInputs} onSubmit={onSubmit} />
          <p>{props.description}</p>
          <div className="description-link">
            <i className="fas fa-mobile-alt text-secondary"></i>
            {props.phone}
          </div>
          <div className="description-link">
            <i className="far fa-envelope text-secondary"></i>
            {props.email}
          </div>
          <div className="description-link">
            <i className="fab fa-linkedin text-secondary"></i>
            <a href={props.linkedin.link}>{props.linkedin.name}</a>
          </div>
          <div className="description-link">
            <i className="fab fa-github text-secondary"></i>
            <a href={props.github.link}>{props.github.name}</a>
          </div>
        </div>
      }
      onClick={onClick}
    />
  );
}

Details.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet tortor eget turpis fringilla malesuada. Cras vulputate vitae sapien sed pellentesque. In at egestas.',
  phone: '+44 7123 456 789',
  email: 'j.smith@gmail.com',
  linkedin: {
    name: 'j-smith',
    link: 'https://linkedin.com/in/j-smith',
  },
  github: {
    name: 'jsmith',
    link: 'https://github.com/jsmith',
  },
};

export default Details;
