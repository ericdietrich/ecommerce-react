import React, { useContext } from 'react';
import products from '../../products.json';
import { Container } from '../../styles/container';
import ProductComponent  from '../Product/Product';
import styled from 'styled-components';
import {GlobalContext} from '../../GlobalContext';

const ProductsComponent = () => {
    const global = useContext(GlobalContext);

    return (
        <Container>
            <Products>
               {global &&
                    global.produtos.map((product) => {
                        return (
                            <ProductComponent product={product} key={product.id} />
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