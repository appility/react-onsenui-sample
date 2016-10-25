import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'babel-polyfill';
import configureStore from './store/ConfigureStore';
import {Provider} from 'react-redux';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

let store = configureStore({});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );
