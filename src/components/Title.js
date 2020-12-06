import React from 'react';
import CardAction from './CardAction';
import Form from './Form';

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props, formActive: false };

    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  getFormInputs() {
    return [
      {
        id: 'name',
        name: 'Full Name',
        type: 'text',
        isLabelled: true,
        value: this.state.name,
      },
      {
        id: 'title',
        name: 'Job Title',
        type: 'text',
        isLabelled: true,
        value: this.state.title,
      },
      {
        id: 'update',
        name: 'update',
        type: 'submit',
        isLabelled: false,
        value: 'Update',
      },
    ];
  }

  onClick() {
    this.setState({ formActive: !this.state.formActive });
  }

  onSubmit(output) {
    this.setState({ ...output, formActive: false });
  }

  render() {
    return (
      <div className="text-center border-bottom">
        <Form
          inputs={this.getFormInputs()}
          onSubmit={this.onSubmit}
          isActive={this.state.formActive}
        />
        <div className="d-flex justify-content-center align-items-start">
          <h1 className="text-uppercase text-black-75">{this.state.name}</h1>
          <CardAction
            actionIcon="fas fa-edit"
            color="black"
            onClick={this.onClick}
          />
        </div>
        <p className="text-muted font-italic text-capitalize">
          {this.state.title}
        </p>
      </div>
    );
  }
}

Title.defaultProps = {
  name: 'John Smith',
  title: 'Magician',
};

export default Title;
