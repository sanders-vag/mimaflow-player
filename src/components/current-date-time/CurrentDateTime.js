import React, { Component } from 'react';
import './CurrentDateTime.css';

class CurrentDateTime extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.setState({date: new Date()}),
       this.props.refresh);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="current-date-time">
      {this.state.date.toUTCString()}
      </div>
    );
  }
}

export default CurrentDateTime;
