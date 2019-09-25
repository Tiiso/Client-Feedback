import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers => [], {}, applyMiddleware());

ReactDOM.render(
    //provider tracks changes from the store and updates the app
<Provider store={store}><App /></Provider>,
document.querySelector('#root')
);