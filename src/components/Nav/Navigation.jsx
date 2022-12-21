import style_Nav from './Navigation.module.css'
import { Outlet, NavLink } from 'react-router-dom'


export const navigateList = [
	{
		id: 1,
		name: 'Main',
		to: '/'
	},
	{
		id: 33,
		name: 'Chats',
		to: '/chats'
	},
	{
		id: 3,
		name: 'Profile',
		to: '/profile'
	}
]

export function Navigation() {



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

			</header>
			<main>
				<Outlet />
			</main>
		</>
	)
}