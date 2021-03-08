import React, { useContext } from 'react'
import styled from 'styled-components';
import imagem from '../../assets/call-of-duty-infinite-warfare.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import {GlobalContext} from '../../GlobalContext';

const ProductComponent = ({product, index}) => {
    const global = useContext(GlobalContext);
    let imageSource = require(`../../assets/${product.image}`);
    
    return (
        <Product>
            <h1>{global.products[index].name}</h1>
            <img src={imageSource.default} alt='Jogo' />

            <div style={{display: 'flex', justifyContent: 'space-between'}} className='info' >
                <span>Preço: R$ {global.products[index].price.toFixed(2).toString().replace('.', ',')}</span>
                <div >
                    <FontAwesomeIcon 
                        icon={faMinusCircle} 
                        height={18}
                        style={{cursor: 'pointer'}}
                        onClick={() => {global.removeFromCart(product.id)}}
                        
                    />
                    <span 
                        style={{padding: '0 5px'}}
                    >
                        {global.products[index].cart ? global.products[index].cart : '0' }
                    </span>  
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
    user-select: none;
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
`;