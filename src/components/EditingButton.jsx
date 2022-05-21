import React from "react";

const EditingButton = ({ handleUpdate }) => {
  return (
    <div className="row mb-3">
      <button className="btn btn-warning" onClick={handleUpdate}>
        Editar Usuario
      </button>
    </div>
  );
};

export default EditingButton;
