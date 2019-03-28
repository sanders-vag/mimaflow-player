import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Track.css";

const Track = ({ track = {}, handlePlayback = f => f, isPlaying = false }) => {
  const handleClick = track => {
    handlePlayback(track);
  };

  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-1">
          <FontAwesomeIcon
            icon={isPlaying ? "pause-circle" : "play-circle"}
            className={`fa-2x play ${
              track.preview_url !== null ? "show" : "hidden"
            }`}
            onClick={e => handleClick(track)}
          />
        </div>
        <div className="col">{track.name}</div>
        <div className="col">{track.album.name}</div>
        <div className="col">
          {track.artists.map(artist => (
            <Fragment key={artist.id}>
              {artist.name} <br />
            </Fragment>
          ))}
        </div>
        <div className="col">
          <img alt="album" src={track.album.images[2].url} />
        </div>
      </div>
    </li>
  );
};

export default Track;
