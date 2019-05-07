import { createStore, applyMiddleware } from 'redux'

// Logger width default options
import Logger from 'redux-logger'

import reducer from './reducers/app.reducer'

export default function configureStore(initialState) {
	const store = createStore(reducer, initialState, applyMiddleware(Logger))
	return store
}
