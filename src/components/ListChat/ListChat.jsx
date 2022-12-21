import { useState } from "react"
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import style_listChat from './ListChat.module.css'

export function ListChat() {




	return (
		<div className={style_listChat.ListChat}>
			<h1>ListChat</h1>
			<h3>Введите <del>http://localhost:3000/chats/1</del> Чтоб отобразить чат</h3>
		</div>

	)
}
