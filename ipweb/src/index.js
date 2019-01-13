import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import logger from 'redux-logger'
import './index.css'
import App from './scenes/App'
import * as serviceWorker from './serviceWorker'
import reducer from './reducers'

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

export const history = createBrowserHistory()

const store = createStore(
    reducer(history), // root reducer with router state
    // initialState,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            logger
        ),
    ),
)

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root'),
    );
});

serviceWorker.unregister();