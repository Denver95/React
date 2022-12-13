import { Button } from "../btn/Button";
import { useState } from "react"
import form_style from './Form.module.css'

export function Form(props) {


	const [text, setText] = useState('');
	const handleSubmit = (event) => {
		event.preventDefault()
		props.addMessage({
			author: 'user',
			text: text
		})
		setText('')
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={text}
					onChange={(event) => setText(event.target.value)}
					className={form_style.input}
				/>
				<Button>Add message</Button>
			</form>
		</>
	)
}