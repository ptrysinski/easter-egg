import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import eggs from './state/eggs'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    eggs,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)