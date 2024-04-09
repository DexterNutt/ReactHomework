import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Gallery } from "./components/Gallery";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { API_URL } from "./utils/constants";
import "./css/App.css";
import { GalleryContext } from "./utils/GalleryContext";

export function App() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/photos`)
      .then((res) => setPhotos(res.data))
      .catch((err) => alert(err));
  }, []);

  return (
    <div id="App">
      <Nav />
      <GalleryContext.Provider value={{ selectedPhoto, setSelectedPhoto }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery listOfPhotos={photos} />} />
        </Routes>
      </GalleryContext.Provider>
    </div>
  );
}
