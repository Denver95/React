import { useState } from "react"
import PropTypes from 'prop-types'
import IButton from '@material-ui/core/Button';
import ITextField from '@material-ui/core/TextField';
import { useParams } from "react-router-dom";


import form_style from './Form.module.css'
import React from 'react';
import { push } from "firebase/database";
import { getMessageListById } from '../../services/firebase'



export function Form() {

	const [text, setText] = useState('');
	const { chatId } = useParams()


	const handleSubmit = (event) => {
		event.preventDefault()

		push(getMessageListById(chatId), {
			author: 'user',
			text
		})

		setText('');
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
				>Добавить сообщение</IButton>

			</form>
		</>
	)
}


Form.propTypes = {
	addMessage: PropTypes.func
}