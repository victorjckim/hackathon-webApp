import React from "react";
import TextInput from "../common/TextInput";

const ExtendForm = props => {
  return (
    <div className="authentication-inner">
      <TextInput
        label="Meter Number"
        name="meterNum"
        type="meterNum"
        value={props.meterNum}
        placeholder=""
        onChange={props.onChange}
        isValid={props.meterNumValid}
        //hintText="Please enter a valid meter number"
      />
      <TextInput
        label="Time"
        name="time"
        type="time"
        value={props.time}
        placeholder=""
        onChange={props.onChange}
        isValid={props.timeValid}
        //hintText="Please enter a valid meter number"
      />
      <button
        style={{ minWidth: "30vw", maxWidth: "100vw" }}
        type="button"
        className="btn btn-primary btn-block mt-4"
        onClick={props.onClick}
      >
        Extend
      </button>
    </div>
  );
};

export default ExtendForm;
