import { REPRODUCTOR_STATES, VELOCITY_MODIFIER_VALUE } from '../../res/constants/reproductor.constants'

const TYPES = {
	START: 'START',
	PAUSE: 'PAUSE',
	STOP: 'STOP',
	INCREASE_VELOCITY: 'INCREASE_VELOCITY',
	DECREASE_VELOCITY: 'DECREASE_VELOCITY'
}

const startReproductor = () => ({
	type: TYPES.START,
	payload: REPRODUCTOR_STATES.STARTED
})

const pauseReproductor = () => ({
	type: TYPES.PAUSE,
	payload: REPRODUCTOR_STATES.PAUSED
})

const stopReproductor = () => ({
	type: TYPES.STOP,
	payload: REPRODUCTOR_STATES.STOPPED
})

const increaseVelocity = () => ({
	type: TYPES.INCREASE,
	payload: -VELOCITY_MODIFIER_VALUE
})

const decreaseVelocity = () => ({
	type: TYPES.DECREASE,
	payload: +VELOCITY_MODIFIER_VALUE
})

export default {
	TYPES,
	startReproductor,
	pauseReproductor,
	stopReproductor,
	increaseVelocity,
	decreaseVelocity
}
