import React, { useEffect, useRef, useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import UserTable from "./components/UserTable";
import { db, database } from "./services/firebase";

const App = () => {
  //Estado que almacena los usuarios de la aplicación
  const [users, setUsers] = useState([]);

  //Estado que almacena si la aplicación está en modo registro: boolean
  const [registerMode, setRegisterMode] = useState(true);

  //Métodos para realizar operaciones de consulta,lectura y escritura en la db
  const { getUsers, insertUser, updateUser, deleteUser } = database();

  //Efect que consulta a la base de datos
  useEffect(() => {
    getUsers(setUsers);
  }, []);

  const fName = useRef(null);
  const lName = useRef(null);

  const inputRefs = [fName, lName];

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <div className="container-fluid">
      <RegistrationForm
        inputRefs={inputRefs}
        data={users}
        setData={setUsers}
        inserData={insertUser}
        registerMode={registerMode}
        setRegisterMode={setRegisterMode}
        updateUser={updateUser}
        userData={userData}
        setUserData={setUserData}
      />
      <UserTable
        inputRefs={inputRefs}
        data={users}
        setRegisterMode={setRegisterMode}
        setUsers={setUsers}
        deleteUser={deleteUser}
        userData={userData}
        setUserData={setUserData}
      />
    </div>
  );
};

export default React.memo(App);
