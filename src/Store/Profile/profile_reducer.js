// Импортируем все что находится в файле types в переменную types
import * as types from './profile_type'



let initialState = {
	check: false,
	isAuth: false,
}

export const profile_reducer = (state = initialState, action) => {
	let { type, payload } = action

	switch (type) {
		case types.Status_CheckBox:
			return {
				...state,
				check: !state.check,
			}


		case types.IS_AUTH:
			return {
				...state,
				isAuth: payload
			}
		default:
			return state
	}

}