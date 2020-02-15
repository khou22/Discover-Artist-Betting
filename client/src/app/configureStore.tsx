import { History } from 'history';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore, Middleware } from 'redux';
import { createLogger } from 'redux-logger'; // For debugging in the console
import { middleware as reduxPackMiddleware } from 'redux-pack';
import thunkMiddleware from 'redux-thunk';
import mainReducers from './reducers'; // Import the reducer (client/src/Reducers/index.js)

// Enable redux devtools extension type checking
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// Thunk middleware is used to allow functions to be passed as actions
const configureStore = (browserHistory: History) => {
    const middlewares: Middleware[] = [thunkMiddleware, reduxPackMiddleware];

    // If turned on, log state changes and actions to the console
    const consoleReduxLogger = false;
    if (consoleReduxLogger) {
        const loggerMiddleware: Middleware = createLogger();
        middlewares.push(loggerMiddleware); // Add middleware
    }

    middlewares.push(routerMiddleware(browserHistory));

    // Creates store that handles the complete state tree of app
    // This is exported and used by the provider
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const reducer = combineReducers({
        // Combine with router reducer
        ...mainReducers,
        routing: routerReducer,
    });
    return createStore(
        reducer,
        /* preloadedState, */ composeEnhancers(applyMiddleware(...middlewares)),
    );
};

export default configureStore;
