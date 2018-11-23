import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NewsList from './NewsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><NewsList /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
