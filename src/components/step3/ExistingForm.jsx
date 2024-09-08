import React, { useState } from "react";

// The following component is an example of your existing Input Component
const Input = ({ label, onChange, value, required }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      className="form-control"
      required={required}
      onChange={onChange}
      value={value}
    />
  </div>
);

const Select = ({ onChange, label, value }) => (
  <div className="form-group">
    <label>{label}</label>
    <select className="form-control" onChange={onChange} value={value}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </div>
);

export const ExistingForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(20);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChangeName = (e) => setName(e.target.value);

  const onChangeAge = (e) => setAge(e.target.value);

  return (
    <form onSubmit={onSubmit}>
      <Input label="First Name" onChange={onChangeName} value={name} required />
      <Select label="Age" onChange={onChangeAge} value={age} />
      <button className="btn btn-primary mt-2" type="submit">
        Submit
      </button>
    </form>
  );
};
