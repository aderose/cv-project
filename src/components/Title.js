import React from 'react';

function Title(props) {
  return (
    <div className="text-center border-bottom">
      <div className="d-flex justify-content-center align-items-start">
        <h1 className="text-uppercase text-black-75">{props.name}</h1>
        <button className="edit">
          <i className="fas fa-edit text-black"></i>
        </button>
      </div>
      <p className="text-muted font-italic text-capitalize">
        ~ {props.title} ~
      </p>
    </div>
  );
}

Title.defaultProps = {
  name: 'John Smith',
  title: 'Web Developer',
};

export default Title;
