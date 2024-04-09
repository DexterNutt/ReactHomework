import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AlbumContext } from "../utils/AlbumContext";
import { Link } from "react-router-dom";

export const Album = ({ listOfAlbums }) => {
  const { selectedALbum, setSelectedAlbum } = useContext(AlbumContext);
  const galleryLink = `/gallery`;

  return (
    <div id="albums">
      {listOfAlbums.slice(0, 10).map((album) => {
        return (
          <div key={album.id} className="album-holder">
            <Link to={galleryLink}>{album.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

Album.propTypes = {
  listOfAlbums: PropTypes.arrayOf(PropTypes.object).isRequired,
};
