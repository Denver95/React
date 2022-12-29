// import { useState } from "react";
import mes_style from './Message.module.css'

export function Message({ messages }) {

	return (

		<div className={mes_style.messageList} >
			<h1 className={mes_style.h1}>Message Chat</h1>
			<div className={mes_style.messageBlock}>
				{messages.map((message, indx) => (
					<section className={mes_style.messageSection} key={indx + 100}>
						<h3 className={mes_style.messageSection_h3}>{message.author}</h3>
						<p className={mes_style.messageSection_p}>{message.text} </p>
					</section>
				))}
			</div>
		</div>


	)
}

