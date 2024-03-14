import React from "react";
import { Welcome } from "./components/Welcome";
import { Bard } from "./components/Bard";
import { Fighter } from "./components/Fighter";
import { Wizard } from "./components/Wizard";

export function App() {
  return (
    <div id="App">
      <Welcome />
      <hr />
      <Fighter />
      <hr />
      <Wizard />
      <hr />
      <Bard />
    </div>
  );
}
