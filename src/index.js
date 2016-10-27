import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'babel-polyfill';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

const initialState = {
    datas: [],
    detail: {
        id: 0,
        title: '',
        thumbnail: '',
        source: ''
    }
};

let store = configureStore(initialState);

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
