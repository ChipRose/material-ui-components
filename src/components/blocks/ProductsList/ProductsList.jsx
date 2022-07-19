import React from 'react';
import { useProductsContext } from '../../../context/products-hook';

import ProductCard from '../../ui/ProductCard/ProductCard';

import { Grid } from '@mui/material';

function ProductsList() {
	const { productsData } = useProductsContext();

	return (
		<>
			<Grid container spacing={2}>
				{productsData.length &&
					productsData.map((product, index) => (
						<Grid item xs={6} md={4} key={index}>
							<ProductCard product={product} />
						</Grid>
					))}
			</Grid>
		</>
	);
}
export default ProductsList;
