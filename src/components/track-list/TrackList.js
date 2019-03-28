import React, { Component, Fragment } from "react";
import Track from "../track/Track";

import "./TrackList.css";

class TrackList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      audioTrack: null,
      nowPlaying: 0
    };
  }

  handlePlayback = track => {
    const { isPlaying, audioTrack, nowPlaying } = this.state;

    if (isPlaying && track.id === nowPlaying) {
      audioTrack.pause();
      this.setState({ audioTrack: null, isPlaying: false, nowPlaying: 0 });
    } else if (isPlaying && track.id !== nowPlaying) {
      audioTrack.pause();
      this.playTrack(track);
    } else if (!isPlaying) {
      this.playTrack(track);
    }
  };

  playTrack = track => {
    console.log("play track");
    const audioTrack = new Audio(track.preview_url);
    audioTrack.play();
    this.setState({ audioTrack, nowPlaying: track.id, isPlaying: true });
  };

  render() {
    const { tracks } = this.props;

    if (!this.props.display) {
      return <Fragment />;
    }

    if (tracks.length === 0) {
      return <div className="no-tracks">No tracks found.</div>;
    }

    return (
      <Fragment>
        <div className="total-tracks">{tracks.length} results</div>
        <ul className="list-group">
          <li className="list-group-item list-title">
            <div className="row align-items-center">
              <div className="col-1" />
              <div className="col">Song</div>
              <div className="col">Album</div>
              <div className="col">Artists</div>
              <div className="col" />
            </div>
          </li>
          {tracks.map(track => (
            <Track
              key={track.id}
              track={track}
              handlePlayback={this.handlePlayback}
              isPlaying={this.state.nowPlaying === track.id}
            />
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default TrackList;
