import React from "react";

const TextInput = props => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={props.name}>{props.label}</label>
      <input
        className="form-control"
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        disabled={props.disabled}
      />
    </div>
  )
}

export default TextInput;
