import React, {Component}    from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import reducer from './reducers';

import Main from './components/com/Main';
import GoodsList from './containers/GoodsListContainer';

require('./style/main.scss')

const middleware = [ thunk ];
middleware.push(createLogger());

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/dist" component={Main}>
                <IndexRoute component={GoodsList} />

            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);