import React, { useEffect, useState } from 'react';
import produtsJson from './products.json';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
    const [products, setProducts] = useState(produtsJson);
    
    useEffect(() => {
        products.map((product, index) => {
            product.cart = 0;
            let newArr = [...products];
            newArr[index] = {...product, cart: 0}
            setProducts(newArr);
        });
    }, []);

    function addToCart( id ) {
        let index = products.findIndex(product => product.id === id );
        let newArr = [...products];
        newArr[index].cart++;
        setProducts(newArr);
    }

    function removeFromCart ( id ) {
        let index = products.findIndex(product => product.id === id );
        if (products[index].cart !== 0) {
            let newArr = [...products];
            newArr[index].cart--;
            setProducts(newArr);
        }
    }


    return (
        <GlobalContext.Provider value={{products, addToCart, removeFromCart}}>
            {children}
        </GlobalContext.Provider>
    );
};

