import style from './Profile.module.css'


import { useSelector, useDispatch } from 'react-redux'

import { selectCheck } from '../../Store/Profile/profile_selector'
import { toggleProfile } from '../../Store/Profile/profile_action'

export function ProfilePage() {

	const status = useSelector(selectCheck);

	const dispatch = useDispatch();


	const handleClick = (event) => {
		event.preventDefault()
		dispatch(toggleProfile())

	}




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
					onClick={handleClick}>{status ? 'Кнопка нажата =)' : 'Нажми кнопку =('}</button>
			</form>
		</div >
	);
}
