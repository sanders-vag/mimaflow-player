import React from 'react';
import ReactDOM from 'react-dom';
import Track from './Track';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const tracks = [];

  ReactDOM.render(<Track />, div);
  ReactDOM.unmountComponentAtNode(div);
});
