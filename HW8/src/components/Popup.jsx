import React, { useContext } from "react";
// import PropTypes from "prop-types";
import { GalleryContext } from "../utils/GalleryContext";

export const Popup = () => {
  const { selectedPhoto, setSelectedPhoto } = useContext(GalleryContext);
  return (
    <div id="popup">
      <button
        className="close-popup"
        onClick={() => {
          setSelectedPhoto("");
        }}
      >
        Close Photo
      </button>
      <div className="popup-container">
        <img src={selectedPhoto} alt={"image"} />
      </div>
    </div>
  );
};
