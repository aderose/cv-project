import React from 'react';

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
        return [...output, { id: input.id, value: input.value }];
      }, []),
    );
  }

  getLabel(isLabelled, id, name) {
    if (isLabelled) {
      return (
        <label htmlFor={id} key={`label-${id}`}>
          {name}
        </label>
      );
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.inputs.map(
          ({ id, name, type, isLabelled, value }, index) => (
            <div key={`container-${id}`}>
              {this.getLabel(isLabelled, id, name)}
              <input
                type={type}
                id={id}
                value={value}
                onChange={this.onChange(index)}
                key={`input-${id}`}
                autoComplete="off"
              />
            </div>
          ),
        )}
      </form>
    );
  }
}

export default Form;
// PROPS structure:
// this.props = {
//   inputs: [
//     {
//       id: 'hi',
//       name: 'Enter Name',
//       type: 'text',
//     },
//     {
//       id: 'hi',
//       name: 'Enter Name',
//       type: 'text',
//     },
//     {
//       id: 'hi',
//       name: 'Enter Name',
//       type: 'text',
//     },
//   ],
// };
