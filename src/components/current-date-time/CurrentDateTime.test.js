import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './CurrentDateTime';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CurrentDateTime refresh="1000000" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
