import React from 'react';

import PageWrapper from '../layout/PageWrapper/PageWrapper';
import { ProductsProvider } from '../../context/products-hook';

function App() {
	return (
		<ProductsProvider>
			<PageWrapper />
		</ProductsProvider>
	);
}
export default App;
