import React from "react";
import { Age } from "./components/Age";
import { Address } from "./components/Addresses";

export function App() {
  const users = [
    {
      name: "Dexter",
      surname: "Nutt",
      address: "Skopje",
      age: 29,
    },
    {
      name: "Yoda",
      surname: "Wisest",
      address: "Dagoba",
      age: 987,
    },
    {
      name: "Wattson",
      surname: "Teslovich",
      address: "Prague",
      age: 8,
    },
    {
      name: "Kiribashi",
      surname: "Siths",
      address: "Washington, DC",
      age: 12,
    },
    {
      name: "Drvo",
      surname: "Drvarov",
      address: "Skopje",
      age: 48,
    },
  ];

  return (
    <div>
      <p>Homework 2</p>
      <Age arr={users} />
      <Address arr={users} />
    </div>
  );
}
