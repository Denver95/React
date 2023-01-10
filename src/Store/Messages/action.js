
export const Add_Chat = 'Add_Chat';
export const Delete_Chat = 'Delete_Chat'
export const Add_Message = 'Add_Message'

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
	payload: { chatName, text },
})

let timeout
export const addMessageReply = (chatName, message) => (dispatch) => {
	dispatch(addMessage(chatName, message))
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
