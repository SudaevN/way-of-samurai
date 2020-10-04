import React from 'react';
import ReactDOM from 'react-dom';
import StarnetApp from "./App";


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StarnetApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
