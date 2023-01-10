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

	const blogs = useSelector(selectBlogs);

	const loading = useSelector(selectBlogsLoading);

	const error = useSelector(selectBlogsError);

	const requestFetchBlogs = () => {
		dispatch(getAllBlogs())

	};

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

