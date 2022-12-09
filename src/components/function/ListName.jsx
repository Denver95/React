// import { useState } from "react";


export function ListName(props) {
	console.log(props)

	return (
		<>
			{/* Выводим массив с обьектами */}
			<ul>
				{/*Принимаем колбэк и возвращаем верстку ()  */}
				{props.dataArr.map((child) => (
					<li key={child.name}>{child.name}</li>
				))}

			</ul>

		</>

	)

}