import React from "react";

const FloatingInput = ({
  reference,
  type,
  name,
  id,
  placeholder,
  userData,
  setUserData,
}) => {
  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="row form-floating mb-3">
      <input
        ref={reference}
        className="form-control"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <label htmlFor={id}>{placeholder}:</label>
    </div>
  );
};

export default FloatingInput;
