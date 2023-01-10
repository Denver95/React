import { Add_Chat, Delete_Chat, Add_Message } from "./action"

const initState = {
	BOT: [
		{
			author: 'user',
			text: 'one text'
		},
		{
			author: 'user',
			text: 'two text'
		},
	]
}


export const messages_Reducer = (state = initState, action) => {
	const { type, payload } = action

	switch (type) {
		case Add_Chat:
			return {
				...state,
				[payload]: []
			};

		case Delete_Chat:

			const chats = { ...state }
			delete chats[payload]
			return chats;

		case Add_Message:
			return {
				...state,
				[payload.chatName]: [
					...state[payload.chatName],
					{
						author: payload.text.author,
						text: payload.text.text
					}
				]
			}




		default:
			return state;
	}
}