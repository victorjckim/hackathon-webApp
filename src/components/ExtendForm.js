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
    </div>
  );
};

export default ExtendForm;
