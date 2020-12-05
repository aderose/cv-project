import React from 'react';
import Card from './Card';
import Form from './Form';
import '../styles/details.css';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props };

    this.formInputs = [
      {
        id: 'description',
        name: 'Description',
        type: 'text',
        isLabelled: true,
        value: this.state.description,
      },
      {
        id: 'phoneNumber',
        name: 'Phone Number',
        type: 'text',
        isLabelled: true,
        value: this.state.phone,
      },
      {
        id: 'email',
        name: 'Email',
        type: 'text',
        isLabelled: true,
        value: this.state.email,
      },
      {
        id: 'linkedin',
        name: 'LinkedIn username',
        type: 'text',
        isLabelled: true,
        value: this.state.linkedin,
      },
      {
        id: 'github',
        name: 'GitHub username',
        type: 'text',
        isLabelled: true,
        value: this.state.github,
      },
      {
        id: 'update',
        name: 'update',
        type: 'submit',
        isLabelled: false,
        value: 'Update',
      },
    ];

    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onClick(event) {
    console.log(event.target);
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <Card
        header="Details"
        icon="fas fa-info-circle"
        body={
          <div className="d-flex flex-wrap mx-auto">
            <Form inputs={this.formInputs} onSubmit={this.onSubmit} />
            <p>{this.state.description}</p>
            <div className="description-link">
              <i className="fas fa-mobile-alt text-secondary"></i>
              {this.state.phone}
            </div>
            <div className="description-link">
              <i className="far fa-envelope text-secondary"></i>
              {this.state.email}
            </div>
            <div className="description-link">
              <i className="fab fa-linkedin text-secondary"></i>
              <a href={`https://linkedin.com/in/${this.state.linkedin}`}>
                {this.state.linkedin}
              </a>
            </div>
            <div className="description-link">
              <i className="fab fa-github text-secondary"></i>
              <a href={`https://github.com/${this.state.github}`}>
                {this.state.github}
              </a>
            </div>
          </div>
        }
        onClick={this.onClick}
      />
    );
  }
}

Details.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet tortor eget turpis fringilla malesuada. Cras vulputate vitae sapien sed pellentesque. In at egestas.',
  phone: '+44 7123 456 789',
  email: 'jsmith99@gmail.com',
  linkedin: 'jsmith99',
  github: 'jsmith99',
};

export default Details;
