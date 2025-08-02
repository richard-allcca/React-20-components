import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "../crud-20250720T023758Z-1-001/crud/CrudTable";

const initialDb = [
  {
    id: 1,
    name: "seiya",
    constellation: "pegazo",
  },
  {
    id: 2,
    name: "shiryu",
    constellation: "dragon",
  },
  {
    id: 3,
    name: "hyoga",
    constellation: "cisne",
  },
];

export const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (data.id === el.id ? data : el));
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = window.confirm("are you sure you want to delete this");

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    }
  };

  return (
    <>
      <h2>Crud App</h2>
      <article>
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          deleteData={deleteData}
          setDataToEdit={setDataToEdit}
        />
      </article>
    </>
  );
};
