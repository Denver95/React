import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import style from './API.module.css'
import { selectBlogs, selectBlogsError, selectBlogsLoading } from "../../Store/Api_blogs/selector";
import { getAllBlogs } from '../../Store/Api_blogs/action'


import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';




export function ApiBlogs() {

	const dispatch = useDispatch();

	// Хранение наших данных
	// const [blogs, setBlogs] = useState([]);
	const blogs = useSelector(selectBlogs);


	// Переменная хранит состояние  загрузки данных
	// const [loading, setLoading] = useState(false);
	const loading = useSelector(selectBlogsLoading);


	// Переменая хранит ошибка
	// const [error, setError] = useState('');
	const error = useSelector(selectBlogsError);

	// // переменная с колбекфункцией которая будет делать асинхронный запрос на сервер и принимать данные.
	// const requestFetchBlogs = async () => {

	// 	// Сделаем активной загрзку
	// 	setLoading(true);

	// 	// Стерем ошибку
	// 	setError('');

	// 	try {
	// 		// Получаем данные и делаем проверку на получение данных
	// 		const res = await fetch(Api_Url_Blogs)
	// 		if (!res.ok) {
	// 			throw new Error(`Request failed with status ${res.status}`);
	// 		}
	// 		// Если проверку true то парсим данные  и записываем
	// 		const data = await res.json();
	// 		setBlogs(data);
	// 	} catch (error) {
	// 		setError(error.message);
	// 	}
	// 	finally {
	// 		setLoading(false);
	// 	}
	// };

	const requestFetchBlogs = () => {
		dispatch(getAllBlogs())

	};


	// Вызовем наш запрос
	useEffect(() => {

	}, []);




	return (
		<div className={style.Api}>
			<h1 className={style.h1_Blogs}>Api Blog</h1>
			<Button
				variant="contained"
				color="success"
				onClick={requestFetchBlogs}
			>
				Показать данные
			</Button>

			{loading && (
				<Box sx={{ display: 'flex' }}>
					<CircularProgress />
				</Box>
			)}

			<div className={style.card_blog}>
				{!loading && blogs.map((blog) => (
					<Card
						sx={{ maxWidth: 345 }}
						key={blog.id}
						className={style.card}
					>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={blog.imageUrl}
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									{blog.title}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{blog.summary}
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
						</CardActions>
					</Card>
				))}
			</div>
			{error && (
				<div className={style.block_Error}>
					<h2 className={style.Error}>{error}</h2>
					<Button
						variant="contained"
						color="success"
						onClick={requestFetchBlogs}
						className={style.btn_error}
					>
						Повторить запрос
					</Button>
				</div>
			)}
		</div>

	)
}

