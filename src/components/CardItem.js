import React from 'react';
import '../styles/cardItem.css';

class CardItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formActive: false,
    };
  }

  render() {
    return (
      <div className="card-item d-flex flex-wrap border-bottom mb-2 align-items-center">
        <h2 className="organisation text-left">{this.props.organisation}</h2>
        <i className="fas fa-edit mx-2" onClick={this.props.onClickEdit}></i>
        <i
          className="fas fa-trash mr-auto"
          onClick={this.props.onClickTrash}
        ></i>
        <p className="dates text-right">
          {this.props.tenure.start} - {this.props.tenure.end}
        </p>
        <p className="title w-100 font-italic text-muted">{this.props.title}</p>
        <p className="w-100">{this.props.description}</p>
      </div>
    );
  }
}

export default CardItem;
