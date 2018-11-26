import React from "react";
import TextInput from "../common/TextInput";

const ParkForm = props => {
  return (
    <div className="authentication-inner">
      <TextInput
        label="Meter Id"
        name="meterNum"
        type="meterNum"
        value={props.meterNum}
        placeholder=""
        onChange={props.onChange}
        isValid={props.meterNumValid}
      //hintText="Please enter a valid meter number"
      />
    </div>
  );
}

export default ParkForm;
