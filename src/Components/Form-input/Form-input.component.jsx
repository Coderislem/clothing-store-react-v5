import React from "react";

import './form-input.styles.scss'

const FormInput = ({ HandChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={HandChange} {...otherProps} />
      {label ? (
        <label
          className={`${otherProps.value.lenght} ? 'shrink': ''  form-input-label`}
        >
            {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
