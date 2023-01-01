import { Add_Chat, Delete_Chat, Add_Message } from "./action"

//@1.Создаем переменную  содержащая чат
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


//@2. 

export const messages_Reducer = (state = initState, action) => {
	const { type, payload } = action

	switch (type) {
		//@3. Первый кейс будет на создание чата
		case Add_Chat:
			//возвращаем обьект с чатами и в нагрузку будет приходить новый чат
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
				//Возвращаем все чаты
				...state,
				// Обращаемся к определенному чату, по Имени 
				[payload.chatName]: [
					// Вернем все сообщения 
					...state[payload.chatName],
					// Добавить ко всем существующим сообщения новое сообщение
					{
						// #3.2 изменим путь был user стало   payload.text.authort
						author: payload.text.author,
						// #3.2 изменим путь добавив text
						text: payload.text.text
					}
				]
			}




		default:
			return state;
	}
}