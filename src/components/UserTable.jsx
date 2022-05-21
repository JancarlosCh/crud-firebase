import React from "react";
import ActionsButtons from "./ActionsButtons";

const UserTable = ({
  inputRefs,
  data,
  setRegisterMode,
  setUsers,
  deleteUser,
  setUserData
}) => {
  return (
    <div className="container-sm table-responsive">
      <table className="table table-hover table-striped table-light">
        <caption>Lista de usuarios</caption>
        <thead className="table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col" className="text-center">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="table-success">
          {data.map(({ id, firstName, lastName }) => {
            return (
              <tr key={id} scope="row">
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td className="text-center">
                  <ActionsButtons
                    inputRefs={inputRefs}
                    userId={id}
                    users={data}
                    setRegisterMode={setRegisterMode}
                    setUsers={setUsers}
                    deleteUser={deleteUser}
                    setUserData={setUserData}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
