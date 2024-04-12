import React from "react";
import { Routes, Route } from "react-router-dom";
import { Cake } from "./components/Cake";
import { Nav } from "./components/Nav";

export function App() {
  return (
    <div id="app">
      <Nav />
      <Routes>
        <Route path="/cake" element={<Cake />} />
      </Routes>
    </div>
  );
}
