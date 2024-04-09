import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Popup } from "./Popup";
import { GalleryContext } from "../utils/GalleryContext";

export const Gallery = ({
  listOfPhotos,
  // selectedPhoto,
  // setPhoto,
  // closePhoto,
}) => {
  const { selectedPhoto, setSelectedPhoto } = useContext(GalleryContext);
  return (
    <div id="gallery">
      {listOfPhotos.slice(0, 50).map((photo) => {
        return (
          <div
            key={photo.id}
            className="img-holder"
            onClick={() => {
              setSelectedPhoto(photo.url);
            }}
          >
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </div>
        );
      })}
      {selectedPhoto !== "" && <Popup />}
    </div>
  );
};

Gallery.propTypes = {
  listOfPhotos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
