import style from './Login.module.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


import { login } from '../../services/firebase';
import { auth } from '../../Store/Profile/profile_action'

export function Login() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');

	const [error, setError] = useState('');

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');

		try {
			await login(email, password);
			dispatch(auth(true))
			navigate('/chats');
		} catch (error) {
			setError(error.message);
			setEmail('');
			setPassword('');
		}

		setEmail('');
		setPassword('');
	};


	return (
		<div className={style.Login}>
			<h1 className={style.h1_Login}>Добро пожаловать. </h1>
			<form onSubmit={handleSubmit} className={style.Form}>
				<label className={style.Form_email}>
					<h3> Введите Email</h3>
					<input
						className={style.Input}
						placeholder='Email'
						type='email'
						name="email"
						value={email}
						onChange={handleEmailChange}
					/>
				</label>
				<label className={style.Form_password}>
					<h3> Введите Пароль</h3>
					<input
						className={style.Input}
						placeholder='Password'
						type='text'
						name="password"
						value={password}
						onChange={handlePasswordChange}
					/>
				</label>
				<div className={style.Form_error}>
					{error && <p className={style.p_error}>{error}</p>}
					<button
						type='submit'
						className={style.Button}
					>
						Войти
					</button>
				</div>
				<div className={style.Form_Ready}>
					<h4>
						Нету учетной записи? <br />
						<Link to='/registration'>Зарегистрироваться</Link>
					</h4>
				</div>
			</form>

		</div>

	)
}
