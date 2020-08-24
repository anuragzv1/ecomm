import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './components/App';
import cart from './reducers/';

//entery point of my app to render the App in root of the html page
const store = createStore(cart);
ReactDOM.render(<App store={store} />, document.getElementById('root'));
