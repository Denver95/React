import React from "react";
import { useEffect } from "react";
import style from './Article.module.css'
import { api } from "../../const";
import { useState } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export function Articles() {

	const [articles, setArticles] = useState([]);

	const [loading, setLoading] = useState(false)

	const [error, setError] = useState('')


	const getFetchArticles = async () => {

		setLoading(true)

		setError('')

		try {
			const res = await fetch(api)
			if (res.ok) {
				const data = await res.json()
				setArticles(data)
			}
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
		}

	}

	useEffect(() => {
	}, [])

	return (
		<div className={style.article}>
			<h1>Articles</h1>
			<Button
				variant="contained"
				color="success"
				onClick={getFetchArticles}
			>
				Success
			</Button>
			{loading && (
				<Box sx={{ display: 'flex' }}>
					<CircularProgress />
				</Box>
			)}
			{!loading && articles.map((article) => (
				<Card sx={{ maxWidth: 345, }}
					key={article.id}>
					<CardActionArea>
						<CardMedia
							component="img"
							height="140"
							image={article.imageUrl}
							alt="green iguana"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{article.title}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{article.summary}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			))}
			{error && <p style={{ color: 'red', fontSize: '50px' }}>{error}</p>}
		</div>
	)
}