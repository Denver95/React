import style_chats from './Chats.module.css'
// import { useEffect } from 'react'
import { Form } from '../../components/Form/Form'
import { Message } from '../../components/Message/Message'
import { ListChat } from '../../components/ListChat/ListChat'
import { useParams, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectMessage } from '../../Store/Messages/selector'


export function ChatsPage() {

	const messages = useSelector(selectMessage)
	const { chatId } = useParams()

	// useEffect(() => {
	// 	if (chatId &&
	// 		messages[chatId]?.length > 0 &&
	// 		messages[chatId][messages[chatId].length - 1].author === 'user') {
	// 		const timeout = setTimeout(() => {
	// 			onAddMessage(chatId, {
	// 				author: 'Bot',
	// 				text: 'Im Bot',
	// 			})
	// 		}, 1500)

	// 		return () => {
	// 			clearTimeout(timeout)
	// 		}
	// 	}
	// }, [messages, chatId])


	//проверка. Если чата не существуею или указали неверный, то нас перенаправит в начальный чат. 
	//Navigate  из библиотеке react-doom.
	if (chatId && !messages[chatId]) {
		return <Navigate to="/chats" />
	}


	return (
		<div className={style_chats.MainPage}>
			<div className={style_chats.container}>
				<div className={style_chats.left_block_chat}>
					<ListChat />
				</div>
				<div className={style_chats.right_block_chat}>
					<Message
						messages={chatId ? messages[chatId] : []} />
					<Form />
				</div>
			</div>
		</div>

	)
}
