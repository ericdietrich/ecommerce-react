import React from 'react';
import products from '../../products.json';
import Product from '../Product/Product';

const Products = () => {
    return (
        <div>
            {
                products.map((product) => {
                    return (
                        <Product product={product} />
                    )
                    
                })
            }
        </div>
    )
}

export default Products;
