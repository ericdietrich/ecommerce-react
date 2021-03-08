import React, { useEffect, useState } from 'react';
import produtsJson from './products.json';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
    const [products, setProducts] = useState(produtsJson);
    const [showCart, setShowCart] = useState(false);
    const [emptyCart, setEmptyCart] = useState(true);
    
    useEffect(() => {
        products.map((product, index) => {
            product.cart = 0;
            let newArr = [...products];
            newArr[index] = {...product, cart: 0}
            setProducts(newArr);
        });
    }, []);

    useEffect(() => {
        setEmptyCart(true);
        products.map((product) => {
            if (product.cart !== 0) {
               setEmptyCart(false);
               return;
           } 
        });
    }, [products])

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
        <GlobalContext.Provider value={{products, addToCart, removeFromCart, showCart, setShowCart, emptyCart }}>
            {children}
        </GlobalContext.Provider>
    );
};

