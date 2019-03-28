import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./OauthToken.css";

const CLIENT_ID = "119cf81261ee4ac5b7b49e093c8fce72";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_URI = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`;

const OauthToken = props => {
  const urlHash = window.location.hash;

  if (urlHash) {
    const token = urlHash.match(
      new RegExp("#access_token=(.*)&token_type.*")
    )[1];
    window.localStorage.setItem("token", token);
    window.location.href=REDIRECT_URI;
  }

  if (!props.display) {
      return <Fragment/>;
  }

  return (
    <div className="alert alert-danger" role="alert">
        <FontAwesomeIcon icon="exclamation-circle" className="fa-lg mr-2" />
      You don't have a valid token.
      <a className="ml-1" href={AUTH_URI}>Get a new token.</a>
    </div>
  );
};

export default OauthToken;