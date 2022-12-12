import { useState } from "react";
import mes_style from './Message.module.css'

export function Message(props) {
	const [messageList] = useState([{ text: '', author: '' }])


	return (

		<div className={mes_style.messageList} >
			<h1>{props.text_h3}</h1>
			{messageList.map((message) => (
				<section className={mes_style.messageSection} key={message.author}>
					<h3 className={mes_style.messageSection_h3}>{message.author}</h3>
					<p className={mes_style.messageSection_p}>{message.text} </p>
				</section>
			))}
		</div>

	)
}