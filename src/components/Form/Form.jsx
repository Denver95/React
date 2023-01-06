import { useState } from "react"
import form_style from './Form.module.css'
import React from 'react';
import IButton from '@material-ui/core/Button';
import ITextField from '@material-ui/core/TextField';
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { addMessageReply } from '../../Store/Messages/action'
=======
<<<<<<< HEAD
import { addMessageReply } from '../../Store/Messages/action'
=======
import { addMessage } from '../../Store/Messages/action'
>>>>>>> main
>>>>>>> main
import { useParams } from "react-router-dom";



export function Form() {

	const [text, setText] = useState('');
	const dispatch = useDispatch()
	const { chatId } = useParams()
	const handleSubmit = (event) => {
		event.preventDefault()
		// Вызываем диспатч и в экшен передаем 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
		// #3. Изменяем dispatch
		// dispatch(addMessage(chatId, text))
		// setText('')
		// #3.1 Переходим в reducer 
		dispatch(addMessageReply(chatId, {
			author: 'user',
			text
		}))
<<<<<<< HEAD
=======
=======
		dispatch(addMessage(chatId, text))
>>>>>>> main
>>>>>>> main
		setText('')
	}


	return (
		<>
			<form
				onSubmit={handleSubmit}
				className={form_style.FormBlock}
			>
				<ITextField
					id="filled-basic"
					label="Message"
					variant="filled"
					type="text"
					value={text}
					onChange={(event) => setText(event.target.value)}
					className={form_style.input}
					autoFocus />
				<IButton
					type="submit"
					variant="contained"
					color="secondary"
					className={form_style.button}
				>Add message</IButton>

			</form>
		</>
	)
}