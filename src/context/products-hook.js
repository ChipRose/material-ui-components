import React, { useContext } from 'react';

import products from '../mocks/products';

const ProductsContext = React.createContext();

const useProductsContext = () => {
  return useContext(ProductsContext);
};

function ProductsProvider({ children }) {

  return (
    <ProductsContext.Provider value={
      { productsData: products }
    }>
      {children}
    </ProductsContext.Provider>)
};

export {
  ProductsProvider, useProductsContext,
}