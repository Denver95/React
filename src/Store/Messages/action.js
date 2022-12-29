
export const Add_Chat = 'Add_Chat';
export const Delete_Chat = 'Delete_Chat'
export const Add_Message = 'Add_Message'
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
	payload: { chatName, text }
})
