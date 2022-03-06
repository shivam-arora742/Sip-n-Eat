import classes from './Input.module.css';
import React from 'react';
const Input = React.forwardRef((props,ref) => {
  return (
    <div className= {classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* using spread operator to extract all key/value pairs from input object passed as prop. */}
      <input {...props.input} ref={ref}/>
    </div>
  );
});

export default Input;
