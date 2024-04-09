import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Gallery } from "./components/Gallery";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { Album } from "./components/Album";
import { API_URL } from "./utils/constants";
import "./css/App.css";
import { GalleryContext } from "./utils/GalleryContext";
import { AlbumContext } from "./utils/AlbumContext";

export function App() {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState({
    id: "",
    url: "",
  });

  useEffect(() => {
    axios
      .get(`${API_URL}/albums`)
      .then((res) => setAlbums(res.data))
      .catch((err) => alert(err));

    axios
      .get(`${API_URL}/photos`)
      .then((res) => setPhotos(res.data))
      .catch((err) => alert(err));
  }, []);

  const deletePhoto = (photoId) => {
    const newPhotoList = photos.filter((photo) => photo.id !== photoId);
    setPhotos(newPhotoList);
    setSelectedPhoto({
      id: null,
      url: "",
    });
  };

  return (
    <div id="App">
      <Nav />
      <AlbumContext.Provider value={{ selectedAlbum, setSelectedAlbum }}>
        <GalleryContext.Provider
          value={{ selectedPhoto, setSelectedPhoto, deletePhoto }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/gallery"
              element={<Gallery listOfPhotos={photos} />}
            />
            <Route path="/albums" element={<Album listOfAlbums={albums} />} />
          </Routes>
        </GalleryContext.Provider>
      </AlbumContext.Provider>
    </div>
  );
}
