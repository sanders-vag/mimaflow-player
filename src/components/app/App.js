import React, { Fragment } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMusic, faTimes, faPlayCircle, faPauseCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';

import Title from "../title/Title";
import CurrentDateTime from "../current-date-time/CurrentDateTime";
import Player from "../player/Player";

import "./App.css";

library.add(faMusic, faTimes, faPlayCircle, faPauseCircle, fab, faExclamationCircle);


function App() {
  return (
    <Fragment>
      <header>
        <a className="banner" href="/">
          <Title name="mimaflow Player" iconName="music" />
        </a>
      </header>
      <Player />
      <footer>
        <CurrentDateTime />
      </footer>
    </Fragment>
  );
}

export default App;
