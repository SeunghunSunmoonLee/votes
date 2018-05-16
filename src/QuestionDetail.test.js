import React from 'react';
import ReactDOM from 'react-dom';
import QuestionDetail from './QuestionDetail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestionDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});
