import { render } from '@testing-library/react';
import React from 'react';
import EditButton from './EditButton';

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props };
  }

  render() {
    return (
      <div className="text-center border-bottom">
        <div className="d-flex justify-content-center align-items-start">
          <h1 className="text-uppercase text-black-75">{this.state.name}</h1>
          <EditButton color="black" />
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
