import React, { useEffect, useState } from 'react';
import produtsJson from './products.json';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
    const [products, setProducts] = useState(produtsJson);
    
    useEffect(() => {
        products.map((product) => {
            product.cart = 0;
            setProducts()
        })
    }, []);


    function addToCart( id ) {
        let index = products.findIndex(product => product.id === id );
        products[index].cart++;
        console.log(products[index].cart);
    }


    return (
        <GlobalContext.Provider value={{products, setProducts, addToCart}}>
            {children}
        </GlobalContext.Provider>
    );
};

