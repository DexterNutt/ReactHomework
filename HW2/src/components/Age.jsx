import React from "react";

export const Age = (props) => {
  const adults = props.arr.map((user, i) => {
    if (user.age >= 18) {
      return (
        <li key={i}>
          {user.name} {user.surname}
        </li>
      );
    }
  });

  const minors = props.arr.map((user, i) => {
    if (user.age < 18) {
      return (
        <li key={i}>
          {user.name} {user.surname}
        </li>
      );
    }
  });

  return (
    <div>
      <p>Voting age adults are:</p>
      <ul>{adults}</ul>
      <p>Minors:</p>
      <ul>{minors}</ul>
    </div>
  );
};
