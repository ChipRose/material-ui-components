import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
function ProductCard({ product }) {
	const { title, image, description, price, weight } = product;

	return (
		<Card>
			<CardMedia component="img" height="248" image={image} alt={title} />
      <CardActions>
        <Button>Описание</Button>
        <Button>Характеристики</Button>
        <Button>Свойства</Button>
      </CardActions>
			<CardContent>
				<Typography variant="h5" component="h3">
					{title}
				</Typography>
				<Typography variant="body2" component="p">
					{description}
				</Typography>
        <Typography variant='body1' component="p">{price} руб./{weight} г.</Typography>
			</CardContent>
		</Card>
	);
}
export default ProductCard;
