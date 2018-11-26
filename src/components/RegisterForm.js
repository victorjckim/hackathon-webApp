import React from "react";
import TextInput from "../common/TextInput";

const MeterForm = props => {
  return (
    <div className="authentication-inner">
      <TextInput
        label="First Name"
        name="firstName"
        type="firstName"
        value={props.firstName}
        placeholder=""
        onChange={props.onChange}
      //isValid={props.meterNumValid}
      //hintText="Please enter a valid meter number"
      />
      <TextInput
        label="Last Name"
        name="lastName"
        type="lastName"
        value={props.lastName}
        placeholder=""
        onChange={props.onChange}
      //isValid={props.timeValid}
      //hintText="Please enter a valid meter number"
      />
      <TextInput
        label="VIN"
        name="vin"
        type="vin"
        value={props.vin}
        placeholder=""
        onChange={props.onChange}
      //isValid={props.timeValid}
      //hintText="Please enter a valid meter number"
      />
      <TextInput
        label="Email"
        name="email"
        type="vin"
        value={props.email}
        placeholder=""
        onChange={props.onChange}
      //isValid={props.timeValid}
      //hintText="Please enter a valid meter number"
      />
      <TextInput
        label="Password"
        name="password"
        type="password"
        value={props.password}
        placeholder=""
        onChange={props.onChange}
      //isValid={props.timeValid}
      //hintText="Please enter a valid meter number"
      />
      <button
        style={{ minWidth: "30vw", maxWidth: "100vw" }}
        type="button"
        className="btn btn-primary form-control"
        onClick={props.onClick}
      >
        Register
      </button>
    </div>
  );
};

export default MeterForm;