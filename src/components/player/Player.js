import React, { Component } from "react";
import SearchBar from "../search-bar/SearchBar";
import TrackList from "../track-list/TrackList";
import OauthToken from "../oauth-token/OauthToken";

import "./Player.css";

const SPOTIFY_URL = "https://api.spotify.com/v1/";
const SEARCH_TYPE = "track";
let token = null;

class Player extends Component {
  constructor(props) {
    super(props);
    token = window.localStorage.getItem("token");

    this.state = {
      tracks: [],
      showLogin: token === null
    };
  }

  handleSearch = searchTerm => {
    const url = `${SPOTIFY_URL}search?q=${searchTerm}&type=${SEARCH_TYPE}&limit=10`;
    const bearerHeader = `Bearer ${token}`;

    fetch(encodeURI(url), {
      method: "GET",
      crossDomain: true,
      headers: new Headers({
        Authorization: bearerHeader,
        "Content-Type": "application/json-utf8"
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        if (!resp.error) {
          this.setState({ tracks: resp.tracks.items });
        }
        this.displayLogin(resp.error && resp.error.status === 401);
      });
  };

  displayLogin = shouldDisplay => {
    if (this.state.showLogin !== shouldDisplay) {
      this.setState({ showLogin: shouldDisplay });
    }
  };

  render() {
    const { tracks } = this.state;

    return (
      <div className="player container">
        <OauthToken display={this.state.showLogin} />
        <SearchBar 
          handleSearch={this.handleSearch} 
          display={!this.state.showLogin}
          />
        <TrackList 
          tracks={tracks} 
          display={!this.state.showLogin}
          />
      </div>
    );
  }
}

export default Player;
