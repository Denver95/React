
export const Add_Chat = 'Add_Chat';
export const Delete_Chat = 'Delete_Chat'
export const Add_Message = 'Add_Message'
<<<<<<< HEAD


=======
<<<<<<< HEAD


=======
>>>>>>> main
>>>>>>> main
//@5. Принимаем новый чат(newChat) 
export const addChat = (newChat) => ({
	type: Add_Chat,
	payload: newChat

})

export const deleteChat = (chatName) => ({
	type: Delete_Chat,
	payload: chatName
})



export const addMessage = (chatName, text) => ({
	type: Add_Message,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
	payload: { chatName, text },
})


// #2 Возвращаем для экшен криэйтор для  функции в которой мы описли асинхронный код  (в Form подключаем функцию мидлвар и изменяем dispatch)
// # Создали переменную для 
let timeout
export const addMessageReply = (chatName, message) => (dispatch) => {
	dispatch(addMessage(chatName, message))
	// #4. Делаем провеку. Если что-то написали и то бот отвечает 'Рад помочь'. И еще одна проверка на то чтоб бот ответил один раз, если мы много раз писали
	if (message.author !== 'Bot') {
		if (timeout) {
			clearTimeout(timeout)
		}
		timeout = setTimeout(() => {
			dispatch(addMessage(chatName, {
				author: 'Bot',
				text: 'Рад помочь'
			}))
		}, 1000)
	}
}
<<<<<<< HEAD
=======
=======
	payload: { chatName, text }
})
>>>>>>> main
>>>>>>> main
