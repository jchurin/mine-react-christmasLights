const TYPES = {
	CHANGE_PATTERN: 'CHANGE_PATERN',
	CHANGE_QUANTITY: 'CHANGE_QUANTITY'
}

const changeLightingPattern = pattern => ({
	type: TYPES.SERIAL,
	payload: pattern
})

const changeLightsQuantity = quantity => ({
	type: TYPES.CHANGE_QUANTITY,
	payload: quantity
})
export default {
	TYPES,
	changeLightingPattern,
	changeLightsQuantity
}
