import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FeelingPage from '../pages/FeelingPage/FeelingPage';
import UnderstandPage from '../pages/UnderstandPage/UnderstandPage';
import SupportPage from '../pages/SupportPage/SupportPage';
import CommentPage from '../pages/CommentPage/CommentPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Feedback Forum</h1>
        <Router>
          <route exact path="/" component={FeelingPage} />
          <route exact path="/understand" component={UnderstandPage} />
          <route exact path="/support" component={SupportPage} />
          <route exact path="/comment" component={CommentPage} />
        </Router>
      </div>
    );
  }
}

export default App;
