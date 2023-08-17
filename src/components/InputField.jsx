import React from 'react';

const InputField = ({ label, name, type = "text", register, errors }) => (
  <div>
    <label className="label">{label}</label>
    <input className="input" name={name} type={type} {...register(name)} />
    <div style={{ color: "red" }}>{errors[name]?.message}</div>
  </div>
);

export default InputField;
