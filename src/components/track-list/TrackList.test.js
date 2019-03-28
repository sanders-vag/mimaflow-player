import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from './TrackList';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const tracks = [];

  ReactDOM.render(<TrackList tracks={tracks}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
