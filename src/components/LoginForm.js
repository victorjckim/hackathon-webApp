import React from "react";
import TextInput from "../common/TextInput";

const LoginForm = props => {
  return (
    <div className="authentication-inner">
      <TextInput
        label="Email"
        name="email"
        type="email"
        value={props.email}
        placeholder="Example@domain.com"
        onChange={props.onChange}
        isValid={props.emailValid}
        hintText="Please enter a valid email"
      />
      <TextInput
        className="pb-3"
        label="Password"
        name="password"
        type="password"
        placeholder="Enter Password.."
        value={props.password}
        onChange={props.onChange}
        isValid={props.passwordValid}
        hintText="Please enter a valid password"
      />
      <button
        style={{ minWidth: "30vw", maxWidth: "30vw" }}
        type="button"
        className="btn btn-primary btn-block mt-4"
        onClick={props.onClick}
      >
        Sign In
      </button>
    </div>
  );
};

export default LoginForm;
