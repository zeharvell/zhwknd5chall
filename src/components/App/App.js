import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FeelingPage from '../Pages/FeelingPage/FeelingPage';
import UnderstandPage from '../Pages/UnderstandPage/UnderstandPage';
import SupportPage from '../Pages/SupportPage/SupportPage';
import CommentPage from '../Pages/CommentPage/CommentPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Feedback Forum</h1>
        <Router>
          <Route exact path="/" Component={FeelingPage} />
          <Route exact path="/" Component={UnderstandPage} />
          <Route exact path="/" Component={SupportPage} />
          <Route exact path="/Comment" Component={CommentPage} />
        </Router>
      </div>
    );
  }
}

export default App;
