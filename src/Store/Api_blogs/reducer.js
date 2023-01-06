import { GET_BLOGS_FAILURE, GET_BLOGS_SUCCESS, GET_BLOGS_REQUEST, STATUSES } from "./action";



const initialState = {
	blogs: [],
	request: STATUSES.IDLE,
	error: null,
};


export const blogsReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_BLOGS_REQUEST:
			return {
				...state,
				request: STATUSES.REQUEST,
			};
		case GET_BLOGS_SUCCESS:
			return {
				...state,
				blogs: payload,
				request: STATUSES.SUCCESS,
			};
		case GET_BLOGS_FAILURE:
			return {
				...state,
				request: STATUSES.FAILURE,
				error: payload,
			};
		default:
			return state;
	}
};




