import * as types from './profile_type'



export const toggleProfile = () => ({
	type: types.Status_CheckBox
})

export const auth = (auth) => ({
	type: types.IS_AUTH,
	payload: auth
})