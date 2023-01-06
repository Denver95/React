import React from "react";
import { useEffect } from "react";
import style from './Article.module.css'
import { api } from "../../const";
import { useState } from "react";

// Добавим стили для списка 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export function Articles() {

	// Локальная перменная которая хранит наши Данные с Сервера. Используем Хук useState. К нам приходит пустой массив и наш useState сразу будет равен пустому массиву

	const [articles, setArticles] = useState([]);

	// Добавим стейт отвечающий за  загрузку данных
	const [loading, setLoading] = useState(false)

	// Добавим стейт отвечающий за Ошибки
	const [error, setError] = useState('')


	//Функция   которая будет заменять нам THEN. Асинхронный запрос. ЗАКОМЕНТИМ FETCH  В API. Вызов функция будет в useEffect
	const getFetchArticles = async () => {
		// Сделаем загрузку тру
		setLoading(true)

		// если была ошибка то стерем
		setError('')

		// Есть такая конструкция try / catch . Она улавливает ошибки
		// try  исполняет данный код
		try {
			const res = await fetch(api)
			// Если статуст (res) равен 200 то будет парсить (распоковывать и переводить данные в обьект) в наш стейт
			if (res.ok) {
				const data = await res.json()
				setArticles(data)
			}
			// Если пришла ошибка то будем записывать в стейт ошибок
		} catch (error) {
			setError(error.message)
			// блок finaly который будет исполнятся не зависимо от того что произошло
		} finally {
			setLoading(false)
		}

	}




	// Чтоб получить данные  по АПИ при загруке используем хук
	// Принимает колбэк функцию и массив зависимости
	useEffect(() => {
		// Приходит в переменную ответ от АПИ
		// fetch(api)
		// 	// Чтобы получить данные используем следующее, цепочки then
		// 	// Мы получили данные ввиде ссылки и мы можем извелечь их 
		// 	// Нам нужно распаковать данные с помощью Json()
		// 	.then((res) => res.json())
		// 	// Цепочка вызова покажет нам массив с 10 обьектами
		// 	// Создадим локальную переменную в которой будем хранить данные
		// 	// Запишем в переменную наши данные 
		// 	.then((data) => setArticles(data))
		// // вызов метода пребросили в кнопку
		// getFetchArticles()
	}, [])
	// если мы поставим следить за нашим массивом Articles то он постоянно будет вызываться

	console.log(articles)
	return (
		<div className={style.article}>
			<h1>Articles</h1>
			{/* Добавили кнопку. Смысл таков. При нажатии на кнопку мы откроем весь список нашего АПИ. Будем отходить от Then */}
			<Button
				variant="contained"
				color="success"
				onClick={getFetchArticles}
			>
				Success
			</Button>
			{/* Подключили загрузку (Progress) */}
			{loading && (
				<Box sx={{ display: 'flex' }}>
					<CircularProgress />
				</Box>
			)}
			{/* Перебераем нашу переменную с данными и будем выводить все что там есть в нашу карточку. 
			Если загрузка нет то будет мапится наши статьи */}
			{!loading && articles.map((article) => (
				<Card sx={{ maxWidth: 345, }}
					// добавили ИД
					key={article.id}>
					<CardActionArea>
						<CardMedia
							component="img"
							height="140"
							// Добавили картинку
							image={article.imageUrl}
							alt="green iguana"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{/* Добавили заголовок */}
								{article.title}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{/* Добавили описание */}
								{article.summary}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			))}

			{/* Выведем нашу ошибку */}
			{error && <p style={{ color: 'red', fontSize: '50px' }}>{error}</p>}
		</div>
	)
}