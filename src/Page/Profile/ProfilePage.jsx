import style from './Profile.module.css'

//5. Чтобы обратится к нашему хранилищу используем хук useSelector, а чтобы изменить наше хранилище useDispatch
import { useSelector, useDispatch } from 'react-redux'

import { selectCheck } from '../../Store/Profile/profile_selector'

//Подключаем наш экшен и передаем в диспатч (кнопка)
// <button onClick={() => dispatch(toggleProfile())} Мы вызваем toggleProfile для того чтоб он нам вернул обьект который мы вынесле в отдельный файл.
import { toggleProfile } from '../../Store/Profile/profile_action'

export function ProfilePage() {

	// Создадиим переменую в которой хрнаится  текущее состояние CheckBox
	//Вынесем (store) => store.check это в отдельный файл и подключим сюда. 
	//Передаем в checked эту перменную
	const status = useSelector(selectCheck);

	// // Создадим новую переменную которая будет менять название чек бокса True/False
	// let [boolean, setBoolean] = useState(true)

	// Изменение данных в сторе 
	const dispatch = useDispatch();

	// Создаем колбек функцию которая будет записывать нам в переменную boolean  название


	return (
		<div className={style.container_profile}>
			<h4 className={style.ProfilePage}>Profile</h4>
			<form className={style.form}>
				<input
					className={style.checkbox}
					type='checkbox'
					checked={status}
					readOnly
				/>
				<button
					className={style.button_checkbox}
					onClick={(event) => (
						event.preventDefault(),
						dispatch(toggleProfile())
					)}>{status ? 'Кнопка нажата =)' : 'Нажми кнопку =('}</button>
			</form>
		</div >
	);
}
