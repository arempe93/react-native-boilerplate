/* @flow */

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../reducers'

const createStoreWithThunk = applyMiddleware(thunkMiddleware)(createStore)
const preloadedState = {}

const store = createStoreWithThunk(rootReducer, preloadedState)

export default store
