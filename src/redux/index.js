import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import initialState from './initialState'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from './rootReducer'

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;


const enhancers = [
    devToolsExtension(),
];

const middlewares = [
    thunkMiddleware,
]

const composedEnhacers = compose(
    applyMiddleware(...middlewares),
    ...enhancers,
)

export default createStore(
    combineReducers({ ...rootReducer }),
    initialState,
    composedEnhacers,
)
