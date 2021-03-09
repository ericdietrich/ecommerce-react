import React, { useEffect, useState } from 'react';
import productsJson from './products.json';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
    const [products, setProducts] = useState(productsJson);
    const [sortedProducts, setSortedProducts] = useState(productsJson);
    const [showCart, setShowCart] = useState(false);
    const [emptyCart, setEmptyCart] = useState(true);
    const [order, setOrder] = useState('');
    
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
    }, [products]);

    useEffect(() => {
        if(order === 'menor-preco') {
            products.sort((a ,b) => {
                let priceA = a.price;
                let priceB = b.price;
                let comparison = 0;
                if (priceA < priceB) {
                    comparison = -1;
                } else {
                    comparison = 1;
                }
                return comparison;
            });
            setSortedProducts(products);
            return;
        }
        if(order === 'maior-preco') {
            products.sort((a ,b) => {
                let priceA = a.price;
                let priceB = b.price;
                let comparison = 0;
                if (priceA < priceB) {
                    comparison = 1;
                } else {
                    comparison = -1;
                }
                return comparison;
            });
            setSortedProducts(products);
            return;
        }
        if(order === 'menor-score') {
            products.sort((a ,b) => {
                let scoreA = a.score;
                let scoreB = b.score;
                let comparison = 0;
                if (scoreA < scoreB) {
                    comparison = -1;
                } else {
                    comparison = 1;
                }
                return comparison;
            });
            setSortedProducts(products);
            return;
        }
        if(order === 'maior-score') {
            products.sort((a ,b) => {
                let scoreA = a.score;
                let scoreB = b.score;
                let comparison = 0;
                if (scoreA < scoreB) {
                    comparison = 1;
                } else {
                    comparison = -1;
                }
                return comparison;
            });
            setSortedProducts(products);
            return;
        }
        if(order === 'a-z') {
            products.sort((a ,b) => {
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                let comparison = 0;
                if (nameA < nameB) {
                    comparison = -1;
                } else {
                    comparison = 1;
                }
                return comparison;
            });
            setSortedProducts(products);
            return;
        }
        if(order === 'z-a') {
            products.sort((a ,b) => {
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                let comparison = 0;
                if (nameA < nameB) {
                    comparison = 1;
                } else {
                    comparison = -1;
                }
                return comparison;
            });
            setSortedProducts(products);
            return;
        }

    },[order])

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
        <GlobalContext.Provider value={{
                products,
                sortedProducts,
                addToCart, 
                removeFromCart, 
                showCart, 
                setShowCart, 
                emptyCart,
                order,
                setOrder
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

