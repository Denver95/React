import { useState } from "react"
import style_listChat from './ListChat.module.css'
import IButton from '@material-ui/core/Button';
import ITextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../../Store/Messages/action";
import { selectChat } from '../../Store/Messages/selector'


export function ListChat() {

	//Массив с данными
	const [value, setValue] = useState('')
	const dispatch = useDispatch();
	//Создаем константу для того чтоб в наш стор мы могли записать добавленный чат и отобразить его. Добовляем селектор
	const chats = useSelector(selectChat)
	// ==================================================
	// Удаляем функцию. В инпуте мы ей прописали
	//  Функция которая будет принимать значение из инпута и записывать в UseState 
	// const handleChange = (e) => {
	// 	setValue(e.target.value)
	// }
	// ================================================


	//Функция Принимает пропрсы из ChatPage
	const handleSubmit = (e) => {
		e.preventDefault();
		// Дает возможность изменить наш сторе
		dispatch(addChat(value));
		setValue('');
	}



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
					> Create chat
					</IButton>
				</form>
				<ul className={style_listChat.chat_ul}>
					{chats.map((chat) => (
						<li key={chat.id} className={style_listChat.chat_li} >
							{/* Передаем куда идти  */}
							<Link to={`/chats/${chat.name}`} className={style_listChat.ul_link}>
								{chat.name}
							</Link>
							<button
								onClick={() => dispatch(deleteChat(chat.name))}
								className={style_listChat.close}
							>x</button>
						</li>
					))}
				</ul>
			</div>
		</div>

	)
}
