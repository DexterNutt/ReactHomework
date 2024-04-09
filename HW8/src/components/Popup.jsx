import React, { useContext } from "react";

import { GalleryContext } from "../utils/GalleryContext";

export const Popup = () => {
  const { selectedPhoto, setSelectedPhoto, deletePhoto } =
    useContext(GalleryContext);

  return (
    <div id="popup">
      <button
        className="close-popup"
        onClick={() => {
          setSelectedPhoto({ id: null, url: "" });
        }}
      >
        Close Photo
      </button>

      <button
        className="delete-photo"
        onClick={() => {
          deletePhoto(selectedPhoto.id);
        }}
      >
        Delete Photo
      </button>
      <div className="popup-container">
        <img src={selectedPhoto.url} alt={"image"} />
      </div>
    </div>
  );
};
