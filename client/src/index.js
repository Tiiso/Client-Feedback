import React from 'react';
import ReactDOM from 'react-dom';
import { provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';

const store = createStore(() => [], {}, applyMiddleware());

ReactDom.render(
    //provider tracks changes from the store and updates the app
<Provider store={store}><App /></Provider>,
document.querySelector('#root')
);