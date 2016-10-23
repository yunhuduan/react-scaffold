import React, {Component}    from "react";
import ReactDOM              from "react-dom";
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import Main from './components/Main';
import HomePageContainer from './containers/HomePageContainer';
import ResultPageContainer from './containers/ResultPageContainer';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={HomePageContainer} />
                <Route path="/result" component={ResultPageContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
