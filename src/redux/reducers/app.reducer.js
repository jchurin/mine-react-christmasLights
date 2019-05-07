import { combineReducers } from 'redux'
import playerReducer from './player.reducer'
import lightingPatternReducer from './lighting-pattern.reducer'
import backgroundReducer from './background.reducer'

const christmasReducer = combineReducers({
	player: playerReducer,
	lighting_pattern: lightingPatternReducer,
	background: backgroundReducer
})

export default christmasReducer