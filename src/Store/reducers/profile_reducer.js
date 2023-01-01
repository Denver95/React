// Импортируем все что находится в файле types в переменную types
import * as types from '../types/profile_type'


// начальное состояние checkBox
let checkBox = {
	check: false
}

export const profile_reducer = (state = checkBox, action) => {
	let { type, payload } = action

	switch (type) {
		case types.Status_CheckBox:
			return {
				...state,
				check: payload,
			}
		default:
			return state
	}

}