import React from 'react';
import '../styles/form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);

    // add value property to inputs with no value
    this.state = {
      inputs: this.props.inputs.map((input) => {
        if (input.value) return input;
        return { ...input, value: '' };
      }),
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Closure for the input of provided index
  onChange = (index) => (event) => {
    const inputs = [...this.state.inputs];
    inputs[index].value = event.target.value;
    this.setState({ inputs: inputs });
  };

  // pass stored input values to the passed submit prop
  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(
      this.state.inputs.reduce((output, input) => {
        if (input.type === 'submit') return output;
        return { ...output, [input.id]: input.value };
      }, {}),
    );
  }

  getLabel(isLabelled, id, name) {
    if (isLabelled) {
      return (
        <label
          htmlFor={id}
          key={`label-${id}`}
          className="px-2 font-weight-bold"
        >
          {name}
        </label>
      );
    }
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className={`generic-form w-100 d-flex flex-column ${
          this.props.isActive ? 'active' : 'inactive'
        }`}
      >
        {this.state.inputs.map(
          ({ id, name, type, isLabelled, value }, index) => (
            <div
              key={`container-${id}`}
              className="form-item d-flex flex-column mb-2"
            >
              {this.getLabel(isLabelled, id, name)}
              <input
                type={type}
                id={id}
                value={value}
                onChange={this.onChange(index)}
                key={`input-${id}`}
                autoComplete="off"
                className="px-1 py-2 border-0 rounded"
              />
            </div>
          ),
        )}
      </form>
    );
  }
}

export default Form;
