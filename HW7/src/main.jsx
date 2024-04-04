import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { Posts } from "./components/Posts.jsx";
import { Todos } from "./components/Todos.jsx";
import { PostDetails } from "./components/PostDetails.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/todos" element={<Todos />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:postId" element={<PostDetails />} />
      </Route>
    </Routes>
  </Router>
);
