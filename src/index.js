import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurant from './reducers/manageRestaurant';
// import rootReducer from './reducers/rootReducer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Had everything working perfectly... then had to spend way too much time changing things (that already work!) just so the tests would pass. Arbitrary naming differences are probably the main cause of the majority of my test failures (even when my naming style is superior, IMO LOL). Sigh.

const store = createStore(manageRestaurant);
// const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);
