import React, { useState } from 'react';
import '../styles/form.css';

function Form(props) {
  const [inputs, setInputs] = useState(props.inputs);

  // wipe all form input values
  const wipeInput = () => {
    setInputs(
      inputs.map((input) => (input.type === 'submit' ? input.value : '')),
    );
  };

  // update inputs array on input change
  const onChange = (index) => (event) => {
    setInputs(
      inputs.map((input, ind) =>
        ind === index ? event.target.value : input.value,
      ),
    );
  };

  // pass input ids & values to prop callback
  const onSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(
      inputs.reduce((output, input) => {
        if (input.type === 'submit') return output;
        return { ...output, [input.id]: input.value };
      }),
    );
    // wipe values for all non-submit inputs
    if (props.formType === 'add') wipeInput();
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`generic-form w-100 d-flex flex-column ${
        props.isActive ? 'active' : 'inactive'
      }`}
    >
      {inputs.map(({ id, name, type, isLabelled, value }, index) => (
        <div
          key={`container-${id}`}
          className="form-item d-flex flex-column mb-2"
        >
          {isLabelled ? (
            <label
              htmlFor={id}
              key={`label-${id}`}
              className="px-2 font-weight-bold"
            >
              {name}
            </label>
          ) : null}
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChange(index)}
            key={`input-${id}`}
            autoComplete="off"
            className="px-1 py-2 border-0 rounded"
          />
        </div>
      ))}
    </form>
  );
}

export default Form;
