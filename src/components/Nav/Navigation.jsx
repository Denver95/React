import style_Nav from './Navigation.module.css'
import { Outlet, NavLink } from 'react-router-dom'


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
	// Подключаем наши Статьи
	{
		id: 4,
		name: 'Articles',
		to: '/articles'
	},
	// 
	{
		id: 5,
		name: 'Blogs',
		to: '/blogs'
	}
]

export function Navigation() {

	const title = () => {
		console.log()

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
									onClick={title}
								>
									{link.name}
								</NavLink>
							</li>
						))
					}

				</ul>

			</header>
			<main>
				<Outlet />
			</main>
		</>
	)
}