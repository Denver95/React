import style_Nav from './Navigation.module.css'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';


import { logOut } from '../../services/firebase';


export const navigateList = [
	{
		id: 1,
		name: 'Main',
		to: '/'
	},
	{
		id: 2,
		name: 'Chats',
		to: '/chats'
	},
	{
		id: 3,
		name: 'Profile',
		to: '/profile'
	},
	{
		id: 4,
		name: 'Articles',
		to: '/articles'
	},
	{
		id: 5,
		name: 'Blogs',
		to: '/blogs'
	},

]

export function Navigation() {

	const navigate = useNavigate();
	const name = useSelector((store) => store.profile.name)
	const isAuth = useSelector((store) => store.profile.isAuth)

	const handleLogin = () => {
		navigate('/login')
	}
	const handleSignUp = () => {
		navigate('/registration')
	}
	const handleLogout = async () => {
		await logOut()
	}

	return (
		<>
			<header className={style_Nav.header_nav}>
				<ul className={style_Nav.header__ul}>
					{
						navigateList.map((link) => (
							<li key={link.id}>
								<NavLink
									to={link.to}
									style={({ isActive }) => ({
										color: isActive ? 'yellow' : 'black'
									})}

								>
									{link.name}
								</NavLink>
							</li>
						))
					}

				</ul>

				<div className={style_Nav.block_regist_login}>
					{!isAuth && (
						<>
							<button
								className={style_Nav.btn}
								onClick={handleLogin}
							>
								Вход
							</button>
							<button
								className={style_Nav.btn}
								onClick={handleSignUp}
							>
								Регистрация
							</button>
						</>
					)}
					{isAuth && (
						<>
							<button
								className={style_Nav.btn}
								onClick={handleLogout}
							>
								Выйти
							</button>
						</>
					)}
					<p>{name}</p>
				</div>

			</header>
			<main>
				<Outlet />
			</main>
		</>
	)
}