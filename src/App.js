
import { useState } from 'react'
import { Form } from './components/classes/Form'
import { Form as FormFunc } from './components/function/Form'
import { ListName } from './components/function/ListName'



//Можно и так но если мы поменяем имя в index.js то можем не найти наш файл. Главное правильно указать имя/  и ставим усы { }
export function App() {

	const [toggle, setToggle] = useState(true)
	const [arr] = useState([{ name: 'Biba' }, { name: 'Boba' }, { name: 'Git' }, { name: 'Good' }])
	// const ShowHide = () => {
	// 	setToggle(!toggle)
	// }

	return (
		//Если больше одного тега то надо все ОБЕРНУТЬ в один общий тег
		<div >
			<Form />
			<hr />
			<button onClick={() => setToggle(!toggle)}>{toggle ? 'hide' : 'show'}</button>
			{/* <button onClick={ShowHide}>{toggle ? 'hide' : 'show'}</button> */}
			{toggle && <FormFunc />}
			<hr />
			<ListName dataArr={arr} />

		</div>
	)
}






// // можно так отправить файл.
// export default App; 