import { createContext, useState } from "react";

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
    products: [],
    setProducts: () => {}  
    // Placeholder function for setProducts. Replace with actual implementation.  
    // Also, consider using Redux for managing state.    
    // Also, consider implementing caching for frequently accessed data.  
    // Also, consider implementing pagination for large datasets.  
    // Also, consider implementing search functionality for filtering products.  
    // Also, consider implementing sorting functionality for products.   
    // Also, consider implementing offline functionality.  
});

export const ProductsProvider =({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products}
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}
