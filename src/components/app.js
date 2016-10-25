import React from 'react';
import {Navigator} from 'react-onsenui';
import MainPage from '../containers/mainPage';

class App extends React.Component {

    constructor() {
        super();
        this.renderPage = this.renderPage.bind(this);
    }

    renderPage(route, navigator) {
        const props = route.props || {};
        props.navigator = navigator;
        props.key = route.title;

        return React.createElement(route.component, props);
    }

    render() {
        return (
            <Navigator
             initialRoute={{component: MainPage, title: 'Main'}}
             renderPage={this.renderPage}
            />
        );
    }
}
