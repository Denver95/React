//Функциональный компонент

import { useState } from "react";
//Подключаем стили 
import styles from './Form.module.css'


export function Form() {

	//Переменмные которая состоит из переменной, функции и начального значениея после =
	const [name, setName] = useState('Denver')
	const [count, setCount] = useState(0)


	//Функция
	const handleChange = (event) => {
		setName(event.target.value)
	}

	//функция
	const handleClick = () => {
		setCount(count + 1)
	}


	//Перед возвратом верстки нужно указать наши функции и переменыне
	return (
		<>
			<h1>Classes Component</h1>
			<h2>Name: {name} </h2>
			{/* <input type="text" onChange={this.handleChange.bind(this)} /> */}
			<input className={styles.border} type="text" onChange={handleChange} />
			{/* Выводит наш счетчик */}
			<h2>Count : {count}</h2>
			<button onClick={handleClick}>click</button>
		</>
	)

}