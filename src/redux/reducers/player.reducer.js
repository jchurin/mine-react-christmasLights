import ACTIONS_REPRODUCTOR from '../actions/player.actions'
import _ from 'lodash'
import {
	REPRODUCTOR_STATE_DEFAULT,
	VELOCITY_DEFAULT
} from '../../res/constants/reproductor.constants'

const defaultState = {
	reproductor: REPRODUCTOR_STATE_DEFAULT,
	velocity: VELOCITY_DEFAULT
}

const playerReducer = (state = defaultState, action) => {
	let newState = _.cloneDeep(state)
	switch (action.type) {
	case ACTIONS_REPRODUCTOR.TYPES.START:
		newState.reproductor = action.payload
		return newState
	case ACTIONS_REPRODUCTOR.TYPES.PAUSE:
		newState.reproductor = action.payload
		return newState
	case ACTIONS_REPRODUCTOR.TYPES.STOP:
		newState.reproductor = action.payload
		return newState
	case ACTIONS_REPRODUCTOR.TYPES.INCREASE:
		newState.velocity += action.payload
		return newState
	case ACTIONS_REPRODUCTOR.TYPES.DECREASE:
		newState.velocity += action.payload
		return newState
	default:
		return state
	}
}

export default playerReducer
