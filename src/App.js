import React from 'react';
import HeaderComponent from './components/Header/Header';
import ProductsComponent from './components/Products/Products';
import './styles/global.css';
import { GlobalStorage } from './GlobalContext';
import CartComponent from './components/Cart/Cart';

const App = () => {
    return (
        <GlobalStorage>
            <HeaderComponent/>
            <CartComponent/>
            <ProductsComponent/>
        </GlobalStorage>
    )
}

export default App
