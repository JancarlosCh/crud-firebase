import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const ActionsButtons = ({
  inputRefs,
  userId,
  users,
  setUsers,
  setRegisterMode,
  deleteUser,
  setUserData,
}) => {
  return (
    <div className="d-flex justify-content-center">
      <EditButton
        inputRefs={inputRefs}
        userId={userId}
        users={users}
        setUsers={setUsers}
        setRegisterMode={setRegisterMode}
        setUserData={setUserData}
      />
      <DeleteButton
        userId={userId}
        users={users}
        setUsers={setUsers}
        deleteUser={deleteUser}
      />
    </div>
  );
};

export default ActionsButtons;
