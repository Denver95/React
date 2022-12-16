import { useState } from "react"
import form_style from './Form.module.css'
import React from 'react';
import IButton from '@material-ui/core/Button';
import ITextField from '@material-ui/core/TextField';

export function Form({ addMessage }) {


	const [text, setText] = useState('');
	const handleSubmit = (event) => {
		event.preventDefault()
		addMessage({
			author: 'user',
			text: text
		})
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