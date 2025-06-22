import React, { createContext } from 'react'
import all_products from '../data/All_Product';

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {

    const contextValue = {
       all_products
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
