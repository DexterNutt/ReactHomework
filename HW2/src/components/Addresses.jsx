import React from "react";

export const Address = (props) => {
  const skp = props.arr.map((user, i) => {
    if (user.address === "Skopje") {
      return (
        <li key={i}>
          {user.name} {user.surname}
        </li>
      );
    }
    return null;
  });

  return (
    <div>
      <p>Citizens of Skopje:</p>
      <ul>{skp}</ul>
    </div>
  );
};
