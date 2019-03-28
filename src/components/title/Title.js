import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Title.css";

function Title(props) {
  return (
    <div className="row display-3">
      <div className="col-1">
        <FontAwesomeIcon icon={props.iconName} className="fa-lg logo" />
      </div>
      <div className="col">
        <span className="title">{props.name}</span>
      </div>
    </div>
  );
}

export default Title;
