import style_chats from './Chats.module.css'
import { useParams } from 'react-router-dom'
import { Form } from '../../components/Form/Form'
import { Message } from '../../components/Message/Message'
import { ListChat } from '../../components/ListChat/ListChat'

import { WithClasses } from '../../hocs/WithClasses'


export function ChatsPage({ messagesDB, chats }) {

	const { chatId } = useParams()

	const MessageListWithClass = WithClasses(Message)


	const messagesChat = chats.find((chat) => chat?.name === chatId)
	const messages = Object.entries(messagesChat.messages)
		.map((mes) => ({
			id: mes[0],
			text: mes[1].text,
			author: mes[1].author,

		}))



	return (
		<div className={style_chats.MainPage}>
			<div className={style_chats.container}>
				<div className={style_chats.left_block_chat}>
					<ListChat chats={chats} />
				</div>
				<div className={style_chats.right_block_chat}>
					<MessageListWithClass
						messages={chatId ? messages : []} />
					<Form />
				</div>
			</div>
		</div>

	)
}
