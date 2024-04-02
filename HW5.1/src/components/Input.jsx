import React, { useEffect, useState } from "react";
import { Training } from "./Training";

export const Input = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [year, setYear] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [rowToEdit, setRowToEdit] = useState(null);
  const [editedFields, setEditedFields] = useState({});

  const [listOfThings, setListOfThings] = useState([
    {
      id: Math.trunc(Math.random() * 1000),
      name: "Pero",
      lastName: "Perovski",
      year: 1996,
    },
    {
      id: Math.trunc(Math.random() * 1000),
      name: "Ivan",
      lastName: "Ivanovski",
      year: 1997,
    },
    {
      id: Math.trunc(Math.random() * 1000),
      name: "Stefan",
      lastName: "Stefanovski",
      year: 1998,
    },
  ]);

  const addTraining = (e) => {
    e.preventDefault();
    const newTraining = {
      id: Math.trunc(Math.random() * 1000),
      name: name,
      lastName: lastName,
      year: year,
    };

    setListOfThings([...listOfThings, newTraining]);
    setName("");
    setLastName("");
    setYear("");
  };

  const deleteRow = (rowId) => {
    const newList = listOfThings.filter((row) => row.id !== rowId);
    setListOfThings(newList);
  };

  const editRow = (rowId) => {
    setIsEdit(true);
    setRowToEdit(rowId);
  };

  const saveEdit = (id) => {
    const updatedList = listOfThings.map((thing) => {
      if (thing.id === id) {
        return {
          ...thing,
          ...editedFields[id],
        };
      }
      return thing;
    });
    setListOfThings(updatedList);
    setIsEdit(false);
    setRowToEdit(null);
    setEditedFields({});
  };

  const cancelEdit = () => {
    setIsEdit(false);
    setRowToEdit([]);
    setEditedFields({});
  };

  return (
    <div id="App">
      <form onSubmit={addTraining}>
        <input
          type="text"
          name="first-name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="text"
          name="last-name"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="text"
          name="year"
          placeholder="Enter Birth Year"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        <br />
        <br />
        <button onClick={(e) => e.preventDefault}>Add Item</button>
      </form>
      <br />
      <Training
        listOfThings={listOfThings}
        deleteRow={deleteRow}
        editRow={editRow}
        isEdit={isEdit}
        rowToEdit={rowToEdit}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
        editedFields={editedFields}
        setEditedFields={setEditedFields}
      />
    </div>
  );
};
