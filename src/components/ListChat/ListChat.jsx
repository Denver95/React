import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addChat } from "../../Store/Messages/action";
import style_listChat from './ListChat.module.css';



import { push, set, remove } from "firebase/database";
import { messagesRef, getChatById, getMessageListById } from '../../services/firebase';

import IButton from '@material-ui/core/Button';
import ITextField from '@material-ui/core/TextField';


export function ListChat({ messagesDB, chats }) {

	const [value, setValue] = useState('')
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addChat(value));

		set(messagesRef, {
			...messagesDB,
			[value]: {
				name: value
			}
		})

		push(getMessageListById(value), {
			text: 'Чат был создан',
			author: 'Admin',
		});

		setValue('');
	}


	const handleDeleteChat = (chatId) => {
		remove(getChatById(chatId));
		navigate('/chats');
	};

	return (
		<div className={style_listChat.ListChat}>
			<div className={style_listChat.container}>
				<h1>ListChat</h1>
				<form onSubmit={handleSubmit} className={style_listChat.Form}>
					<ITextField
						id="filled-basic"
						label="Message"
						variant="filled"
						type="text"
						value={value}
						onChange={(e) => setValue(e.target.value)}
						autoFocus
						className={style_listChat.Form_input} />
					<IButton
						type="submit"
						variant="contained"
						color="secondary"
						className={style_listChat.Form_button}
					> Создать Чат
					</IButton>
				</form>
				<ul className={style_listChat.chat_ul}>
					{chats.map((chat) => (
						<li key={chat.name} className={style_listChat.chat_li} >
							<Link to={`/chats/${chat.name}`} className={style_listChat.ul_link}>
								{chat.name}
							</Link>
							<button
								onClick={() => dispatch(handleDeleteChat(chat.name))}
								className={style_listChat.close}
							>x</button>
						</li>
					))}
				</ul>
			</div>
		</div>

	)
}
