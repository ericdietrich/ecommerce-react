import React, { useContext } from 'react';
import { Container } from '../../styles/container';
import ProductComponent  from '../Product/Product';
import styled from 'styled-components';
import {GlobalContext} from '../../GlobalContext';

const ProductsComponent = () => {
    const global = useContext(GlobalContext);

    return (
        <Container style={{display: 'flex', flexDirection: 'column'}}>
            <Products>
                <div className='select'>
                    <select 
                        value={global.order} 
                        onChange={({target}) => global.setOrder(target.value)}
                    >
                        <option value='' disabled>Ordenar</option>
                        <option value='menor-preco'>Menor Preço</option>
                        <option value='maior-preco'>Maior Preço</option>
                        <option value='menor-score'>Menos Popular</option>
                        <option value='maior-score'>Mais Popular</option>
                        <option value='a-z'>Alfabética (A-Z)</option>
                        <option value='z-a'>Alfabética (Z-A)</option>
                    </select>
                </div>
                <div className='products'>
               {global
                    &&
                    global.sortedProducts.map((product, index) => {
                        return (
                            <ProductComponent product={product} index={index} key={product.id} />
                        )
                        
                    })
                } </div>
            </Products>
            
        </Container>
    )
}

export default ProductsComponent;

const Products = styled.div`
    margin-top: 140px;
    .products {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    @media (max-width: 600px) {
        .products {
            flex-direction: column;
        }
    }
    
`;