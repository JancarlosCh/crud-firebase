import React from "react";

const RegistrationButton = ({ handleSubmit }) => {
  return (
    <div className="row mb-3">
      <button className="btn btn-primary" onClick={handleSubmit}>
        Registrar
      </button>
    </div>
  );
};

export default RegistrationButton;
