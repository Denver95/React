import style_chats from './Chats.module.css'
import { useState, useEffect } from 'react'
import { Form } from '../../components/Form/Form'
import { Message } from '../../components/Message/Message'
import Typography from '@material-ui/core/Typography';

export function ChatsPage() {

	const [messageList, setMessageList] = useState([{ text: '', author: '' }])

	const addMessage = (newMessage) => {
		setMessageList([...messageList, newMessage])
	}


	useEffect(() => {
		if (messageList.length > 0 && messageList[messageList.length - 1].author === 'user') {
			const timeout = setTimeout(() => {
				addMessage({
					author: 'Bot',
					text: 'Im Bot',
				})
			}, 1500)
			return () => {
				clearTimeout(timeout)
			}
		}
	}, [messageList])



	return (
		<div className={style_chats.MainPage}>
			<div className={style_chats.container}>

				<Typography variant="h4" gutterBottom>
					Message component
				</Typography>
				<div className={style_chats.flex_box_chat}>
					<Message messageList={messageList} />
					<Form addMessage={addMessage} />
				</div>
			</div>
		</div>

	)
}
