import React, { useState } from 'react';
import produtosJson from './products.json';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
    const [produtos, setProdutos] = useState(produtosJson);
    
    function imprimir() {
        console.log('imprimir');
    }
    

    return (
        <GlobalContext.Provider value={{produtos, setProdutos, imprimir}}>
            {children}
        </GlobalContext.Provider>
    );
};

