import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.searchTerm = React.createRef();

    this.state = {
      emptySearch: true
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    const emptySearch = event.target.value === "";
    if (this.state.emptySearch !== emptySearch) {
      this.setState({ emptySearch });
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.props.handleSearch(this.searchTerm.current.value);
  }

  handleClear() {
    this.searchTerm.current.value = "";
    this.setState({ emptySearch: true });
  }

  render() {
    if (!this.props.display) {
      return <Fragment />;
    }

    return (
      <form noValidate>
        <div className="form-row align-items-center">
          <div className="col-12">
            <label className="control-label">
              Search for your favorite music:
            </label>
          </div>
          <div className="input-group col-10 mb-2">
            <input
              type="text"
              className="form-control"
              id="search-term"
              name="search-term"
              placeholder="Search artist, song, album ..."
              onChange={this.handleChange}
              ref={this.searchTerm}
              data-cy="search-term"
            />
            <span
              className={`input-group-text clear ${
                this.state.emptySearch ? "hidden" : ""
              }`}
              onClick={this.handleClear}
              data-cy="clear-btn"
            >
              <FontAwesomeIcon icon="times" onClick={this.handleClear} />
            </span>
          </div>
          <div className="col-2">
            <button
              type="submit"
              className="btn btn-search mb-2 btn-block"
              onClick={this.handleClick}
              disabled={this.state.emptySearch}
              data-cy="search-btn"
            >
              Search
              <FontAwesomeIcon
                icon={["fab", "spotify"]}
                className="fa-lg ml-2"
              />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
