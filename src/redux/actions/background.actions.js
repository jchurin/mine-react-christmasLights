const TYPES = {
	CHANGE_COLOR: 'CHANGE_COLOR'
}

const changeBackgroundColor = color => ({
	type: TYPES.CHANGE_COLOR,
	payload: color
})

export default {
	TYPES,
	changeBackgroundColor
}
