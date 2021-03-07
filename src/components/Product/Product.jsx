import React, { useContext } from 'react'
import styled from 'styled-components';
import imagem from '../../assets/call-of-duty-infinite-warfare.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import {GlobalContext} from '../../GlobalContext';

const ProductComponent = ({product, index}) => {
    const global = useContext(GlobalContext);
    let image = `../../assets/${product.image}`;

    console.log(global.products[index].cart);
    
    return (
        <Product>
            <h1>{global.products[index].name}</h1>
            <img src={`${image}`} alt='Jogo' />
            <img src={imagem} alt='Jogo' />

            <div style={{display: 'flex', justifyContent: 'space-between'}} className='info' >
                <span>Preço: R$ {global.products[index].price.toString().replace('.', ',')}</span>
                <div >
                    <FontAwesomeIcon 
                        icon={faMinusCircle} 
                        height={18}
                        style={{cursor: 'pointer'}}
                        
                    />
                    <span className='add'>{global.products[index].cart}</span>  
                    <FontAwesomeIcon 
                        icon={faPlusCircle} 
                        height={18}
                        style={{cursor: 'pointer'}} 
                        onClick={() => {global.addToCart(product.id)}}
                    />
                </div>
            </div>
            <span>Score: {product.score}</span>
        </Product>
    )
}

export default ProductComponent;

const Product = styled.div`
    background: #FFFFFF;
    width: 20%;
    margin: 15px 5px;
    padding: 10px;
    border-radius: 15px 5px;
    border: 3px solid var(--color-secundary);
    &:hover {
        border: 3px solid var(--color-primary-lighter);
    }

    h1 {
        font-size: 2rem;
        height: 46px;
    }

    .info {
        margin-top: 20px;
    }

    .add {
        padding: 0 5px;
    }
`;