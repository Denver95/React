import { Api_Url_Blogs } from "../../const";

export const GET_BLOGS_REQUEST = "GET_BLOGS_REQUEST";
export const GET_BLOGS_SUCCESS = "GET_BLOGS_SUCCESS";
export const GET_BLOGS_FAILURE = "GET_BLOGS_FAILURE";

export const STATUSES = {
	IDLE: 0,
	REQUEST: 1,
	SUCCESS: 2,
	FAILURE: 3,
}


export const getBlogsRequest = () => ({
	type: GET_BLOGS_REQUEST,
});
export const getBlogsSuccess = (data) => ({
	type: GET_BLOGS_SUCCESS,
	payload: data,
});
export const getBlogsFailure = (err) => ({
	type: GET_BLOGS_FAILURE,
	payload: err,
});

export const getAllBlogs = () => async (dispatch) => {
	dispatch(getBlogsRequest());
	try {
		const res = await fetch(Api_Url_Blogs)
		if (!res.ok) {
			throw new Error(`Request failed with status ${res.status}`);
		}
		const data = await res.json();
		dispatch(getBlogsSuccess(data));
	} catch (error) {
		dispatch(getBlogsFailure(error.message))
	}

};
