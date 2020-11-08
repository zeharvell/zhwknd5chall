import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

const CommentReducer = (state = 'words', action) => {
  if (action.type === 'SET_COMMENT_TYPE') {
    return action.payload;
  }

  return state;
};

const FeelingReducer = () => {};

const SupportReducer = () => {};

const UnderstandReducer = () => {};

const storeInstance = createStore(
  combineReducers({
    CommentReducer,
  })
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
