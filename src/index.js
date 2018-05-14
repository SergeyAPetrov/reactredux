import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import routes from './routes';
import {Router, browserHistory} from 'react-router';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import app from './components/reducers/index';
import { Provider} from 'react-redux';

const store = createStore(app);

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);