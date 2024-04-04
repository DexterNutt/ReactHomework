import React from "react";
import { Navigation } from "./components/Navigation";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div id="App">
      <nav>
        <Navigation />
      </nav>
      <main>
        <h2>Welcome</h2>
        <Outlet />
      </main>
    </div>
  );
}
