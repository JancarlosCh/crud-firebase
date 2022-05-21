import React, { useRef, useState } from "react";
import EditingButton from "./EditingButton";
import FloatingInput from "./FloatingInput";
import RegistrationButton from "./RegistrationButton";

const RegistrationForm = ({
  inputRefs,
  data,
  setData,
  inserData,
  registerMode,
  setRegisterMode,
  id,
  updateUser,
  userData,
  setUserData,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.firstName !== "" && userData.lastName !== "") {
      if (
        /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(userData.firstName) &&
        /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(userData.lastName)
      ) {
        inserData(userData, data, setData);
        inputRefs[0].current.value = "";
        inputRefs[1].current.value = "";
        alert("Usuario registrado correctamente");
      } else {
        alert("Solo se admiten cadenas de texto");
      }
    } else {
      alert("Debes llenar todos los campos");
    }
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    if (userData.firstName !== "" && userData.lastName !== "") {
      if (
        /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(userData.firstName) &&
        /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(userData.lastName)
      ) {
        const dataUpdated = data.filter((user) => user.id !== userData.id);
        setData([...dataUpdated, userData]);
        updateUser(userData);
        setUserData({ firstName: "", lastName: "" });
        inputRefs[0].current.value = "";
        inputRefs[1].current.value = "";
        alert("Usuario actualizado correctamente");
        setRegisterMode(true);
      } else {
        alert("Solo se admiten cadenas de texto");
      }
    } else {
      alert("Debes llenar todos los campos");
    }
  };

  return (
    <div className="container-sm d-flex flex-column align-items-center">
      <h2>Registro de usuarios</h2>
      <form className="w-50">
        <FloatingInput
          reference={inputRefs[0]}
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Nombre"
          userData={userData}
          setUserData={setUserData}
        />
        <FloatingInput
          reference={inputRefs[1]}
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Apellido"
          userData={userData}
          setUserData={setUserData}
        />
        {registerMode ? (
          <RegistrationButton handleSubmit={handleSubmit} />
        ) : (
          <EditingButton handleUpdate={handleUpdate} />
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;
