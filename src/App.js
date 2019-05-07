import React from 'react'
import './App.css'

import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './redux/store'

const reduxStore = configureStore(window.REDUX_INITIAL_DATA)

function App() {
	return (
		<ReduxProvider store={reduxStore}>
			<div className="App" />
		</ReduxProvider>
	)
}

export default App
