import React from 'react';
import products from '../../products.json';
import { Container } from '../../styles/container';
import ProductComponent  from '../Product/Product';
import styled from 'styled-components';

const ProductsComponent = () => {
    return (
        <Container>
            <Products>
               {
                    products.map((product) => {
                        return (
                            <ProductComponent product={product} />
                        )
                        
                    })
                } 
            </Products>
            
        </Container>
    )
}

export default ProductsComponent;

const Products = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;