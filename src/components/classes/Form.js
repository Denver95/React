import React, { Component } from "react";

export class Form extends Component {

	state = {
		name: 'tom',
		count: 0,
	}

	// //Через функцию привязываем ИНпут к переменной/ Может принимать event
	// handleChange(event) {
	// 	// this.name = event.target.value => Вот так не работает

	// 	//Будет тоже ошибка, по скольку This идет в контексте с нашей функции, а не приложением
	// 	// Нам нужно в ИНПУТ добавить bind(this)
	// 	this.setState({ name: event.target.value })
	// }


	//ВТОРОЙ СПОСОБ ПРИМЕНИТЬ СТРЕЛОЧНУЮ ФУНКЦИЮ
	handleChange = (event) => {
		this.setState({ name: event.target.value })

	}

	//При клике добовляем +1
	handleClick = (event) => {
		// this.setState({ count: this.state.count + 1 })
		//Можно и так через колбек
		this.setState((prevSteta) => ({ count: prevSteta.count + 1 }))

	}




	//Возвращает верстку HTML 
	render() {
		return (
			//Упращенная запись =>  <></> . Можно ставить и дивы 
			<div>
				<h1>Classes Component</h1>
				<h2>Name: {this.state.name} </h2>
				{/* <input type="text" onChange={this.handleChange.bind(this)} /> */}
				<input type="text" onChange={this.handleChange} />
				{/* Выводит наш счетчик */}
				<h2>Count : {this.state.count}</h2>
				<button onClick={this.handleClick}>click</button>

			</div>
		)
	}

	//1:00:00
}