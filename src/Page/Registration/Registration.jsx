import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


import { registration } from '../../services/firebase';
import style from './Regist.module.css'



export function Registration() {

	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');

	const [error, setError] = useState('');

	const navigate = useNavigate()

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	}


	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await registration(email, password);
			navigate('/login');
		} catch (error) {
			setError(error.message);
			setEmail('');
			setPassword('');
		}
		setEmail('');
		setPassword('');
	};
	return (
		<div className={style.Regist}>
			<h1 className={style.h1_Regist}>Пройдите Регистрацию</h1>
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
						Зарегистрироваться
					</button>
				</div>
				<div className={style.Form_Ready}>
					<h4>
						У вас уже есть учетная запись? <br />
						<Link to='/login'>Войдите в Систему</Link>
					</h4>
				</div>
			</form>
			{error && <p style={{ color: 'red' }}>{error}</p>}
		</div>

	)
}