import React from "react";

export const Training = ({
  listOfThings,
  deleteRow,
  editRow,
  rowToEdit,
  saveEdit,
  cancelEdit,
  editedFields,
  setEditedFields,
}) => {
  const handleFieldChange = (id, field, value) => {
    setEditedFields({
      ...editedFields,
      [id]: {
        ...editedFields[id],
        [field]: value,
      },
    });
  };

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Birth Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {listOfThings.map((thing, i) => (
          <tr key={i}>
            <td>{thing.id}</td>
            <td>
              {rowToEdit === thing.id ? (
                <input
                  type="text"
                  value={editedFields[thing.id]?.name || ""}
                  onChange={(e) =>
                    handleFieldChange(thing.id, "name", e.target.value)
                  }
                />
              ) : (
                thing.name
              )}
            </td>
            <td>
              {rowToEdit === thing.id ? (
                <input
                  type="text"
                  value={editedFields[thing.id]?.lastName || ""}
                  onChange={(e) =>
                    handleFieldChange(thing.id, "lastName", e.target.value)
                  }
                />
              ) : (
                thing.lastName
              )}
            </td>
            <td>
              {rowToEdit === thing.id ? (
                <input
                  type="text"
                  value={editedFields[thing.id]?.year || ""}
                  onChange={(e) =>
                    handleFieldChange(thing.id, "year", e.target.value)
                  }
                />
              ) : (
                thing.year
              )}
            </td>
            <td>
              {rowToEdit === thing.id ? (
                <>
                  <button onClick={() => saveEdit(thing.id)}>Save</button>
                  <button onClick={() => cancelEdit()}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => editRow(thing.id)}>Edit</button>
                  <button onClick={() => deleteRow(thing.id)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
