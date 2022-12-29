// Импортируем все что находится в файле types в переменную types
import * as types from './profile_type'


// начальное состояние checkBox
let checkBox = {
	check: false
}

export const profile_reducer = (state = checkBox, action) => {
	let { type } = action

	switch (type) {
		case types.Status_CheckBox:
			return {
				...state,
				check: !state.check,
			}
		default:
			return state
	}

}