import React from "react";

const EditButton = ({
  inputRefs,
  setRegisterMode,
  userId,
  users,
  setUserData,
}) => {
  const handleClick = () => {
    const userData = users.filter((user) => user.id === userId);
    const { firstName, lastName } = userData[0];
    inputRefs[0].current.value = firstName;
    inputRefs[1].current.value = lastName;

    setUserData({
      id: userId,
      firstName: inputRefs[0].current.value,
      lastName: inputRefs[1].current.value,
    });
    setRegisterMode(false);
  };
  return (
    <>
      <button className="btn btn-warning px-3 me-2" onClick={handleClick}>
        Editar
      </button>
    </>
  );
};

export default EditButton;
