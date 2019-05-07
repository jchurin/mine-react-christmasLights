import ACTIONS_LIGHTS from '../actions/lights.actions'
import _ from 'lodash'
import {
	LIGHTING_PATTERN_DEFAULT,
	LIGHTS_QUANTITY_DEFAULT
} from '../../res/constants/lights.constants'

const defaultState = {
	lighting_pattern: LIGHTING_PATTERN_DEFAULT,
	lights_quantity: LIGHTS_QUANTITY_DEFAULT
}

const lightsReducer = (state = defaultState, action) => {
	let newState = _.cloneDeep(state)
	switch (action.type) {
	case ACTIONS_LIGHTS.TYPES.CHANGE_PATTERN:
		newState.lighting_pattern = action.payload
		return newState
	case ACTIONS_LIGHTS.TYPES.CHANGE_QUANTITY:
		newState.lights_quantity = action.payload
		return newState
	default:
		return state
	}
}

export default lightsReducer
