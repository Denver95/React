
import { Link } from 'react-router-dom'
import style from './Main.module.css'

export function MainPage() {




	return (
		<div className={style.MainPage}>
			<div className={style.Block_Regist}>
				<Link
					to='/registration'
					className={style.Link}
				> Регистрация</Link>
			</div>
			<div className={style.Block_Login}>
				<Link
					to='/login'
					className={style.Link}
				> Войти</Link>
			</div>
		</div>
	)
}
