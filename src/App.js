import React from 'react'
import HeaderComponent from './components/Header/Header'
import ProductsComponent from './components/Products/Products'
import './styles/global.css'

const App = () => {
    return (
        <div>
            <HeaderComponent/>
            <ProductsComponent/>
        </div>
    )
}

export default App
