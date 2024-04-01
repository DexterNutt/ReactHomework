import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Posts } from "./components/Posts";
import { Todos } from "./components/Todos";
import { NotFound } from "./components/NotFound";

export function App() {
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getPosts();
    getTodos();
  }, []);

  const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((JSON) => setPosts(JSON))
      .catch((err) => alert(err));
  };

  const getTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((JSON) => setTodos(JSON))
      .catch((err) => alert(err));
  };

  const markToDoAsDone = (todo) => {
    setTodos([
      ...todos.map((item) =>
        item.id === todo.id
          ? { id: item.id, title: item.title, completed: !item.completed }
          : item
      ),
    ]);
  };

  return (
    <div id="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts postList={posts} />} />
        <Route
          path="/to-dos"
          element={<Todos todoList={todos} markToDoAsDone={markToDoAsDone} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
