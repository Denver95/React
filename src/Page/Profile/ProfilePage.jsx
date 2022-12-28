import style from './Profile.module.css'

//5. Чтобы обратится к нашему хранилищу используем хук useSelector, а чтобы изменить наше хранилище useDispatch
import { useSelector, useDispatch } from 'react-redux'
import * as types from '../../Store/types/profile_type'

export function ProfilePage() {

	// Создадиим переменую в которой хрнаится  текущее состояние CheckBox
	let status = useSelector((store) => store.check);

	// // Создадим новую переменную которая будет менять название чек бокса True/False
	// let [boolean, setBoolean] = useState(true)

	// Изменение данных в сторе 
	const dispatch = useDispatch();

	// Создаем колбек функцию которая будет записывать нам в переменную boolean  название

	let handleChangeBoolean = () => {
		status = !status
		dispatch({ type: types.Status_CheckBox, payload: status })
	}

	return (
		<div className={style.container_profile}>
			<h4 className={style.ProfilePage}>Profile</h4>
			<form className={style.form}>
				<input
					className={style.checkbox}
					type='checkbox'
					checked={status}
					onChange={handleChangeBoolean}
				/>
				<p className={style.name_p}>{status ? 'Галочка стоит, Спасибо =)' : 'Нету галочки. Поставь О_о'} </p>
			</form>
		</div>
	);
}
