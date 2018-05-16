import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import List from 'antd/lib/list';
import Card from 'antd/lib/card';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Questions from './Questions'
import QuestionDetail from './QuestionDetail'
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Questions} />
            <Route exact path="/questions/:id" component={QuestionDetail} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
