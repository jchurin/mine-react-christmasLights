import ACTIONS_BACKGROUND from '../actions/background.actions'
import _ from 'lodash'
import { BACKGROUND_DEFAULT_COLOR } from '../../res/constants/background.constants'

const defaultState = {
	background_color: BACKGROUND_DEFAULT_COLOR
}

const backgroundReducer = (state = defaultState, action) => {
	let newState = _.cloneDeep(state)
	switch (action.type) {
	case ACTIONS_BACKGROUND.TYPES.CHANGE_COLOR:
		newState.background_color = action.payload
		return newState
	default:
		return state
	}
}

export default backgroundReducer
