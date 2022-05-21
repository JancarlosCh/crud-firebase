import React from "react";

const DeleteButton = ({ userId, users,setUsers, deleteUser }) => {
  const handleDelete = () => {
    deleteUser(userId, users, setUsers,deleteUser);
  };

  return (
    <>
      <button className="btn btn-danger px-2 ms-2" onClick={handleDelete}>
        Eliminar
      </button>
    </>
  );
};

export default DeleteButton;
