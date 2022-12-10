// import { useState } from "react";


export function ListName(props) {

	return (
		<>
			{/* Выводим массив с обьектами */}
			<ul>
				{/*Принимаем колбэк и возвращаем верстку ()  */}
				{props.dataArr.map((child) => (
					<li key={child.id}>{child.name}</li>
				))}

			</ul>

		</>

	)

}