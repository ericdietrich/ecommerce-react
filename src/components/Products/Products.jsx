import React, { useContext } from 'react';
import { Container } from '../../styles/container';
import ProductComponent  from '../Product/Product';
import styled from 'styled-components';
import {GlobalContext} from '../../GlobalContext';

const ProductsComponent = () => {
    const global = useContext(GlobalContext);

    return (
        <Container>
            <Products>
               {global
                    &&
                    global.products.map((product, index) => {
                        return (
                            <ProductComponent product={product} index={index} key={product.id} />
                        )
                        
                    })
                } 
            </Products>
            
        </Container>
    )
}

export default ProductsComponent;

const Products = styled.div`
    margin-top: 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;