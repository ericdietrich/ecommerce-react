import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import {GlobalContext} from '../../GlobalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';

const CartComponent = () => {

    const global = useContext(GlobalContext);
    const [amountProducts, setAmountProducts] = useState(0);
    const [shippingPerProduct] = useState(10);
    const [shipping, setShipping] = useState(0);
    const [subtotal, setSubTotal] = useState(0);

    useEffect(() => {
        setAmountProducts(0);
        global.products.map(product => {
            if (product.cart !== 0) {
                setAmountProducts(prev => prev + 1);
            }
        })
    }, [global.products]);

    useEffect(() => {
        (subtotal <= 250) ? setShipping(amountProducts * shippingPerProduct) : setShipping(0);
        
    }, [amountProducts, global.products, subtotal]);

    useEffect(() => {
        setSubTotal(0);
        global.products.map((product) => {
            if (product.cart !==0) {
                setSubTotal(prev => prev + (product.cart * product.price))
            }
        })
    }, [global.products] )

    return (
        <Cart>
            { global &&
            global.products.map((product) => {
                if(product.cart !== 0) {
                    return (
                        <ProductCart key={product.id}>
                            {product.image}
                            {product.cart}
                            {product.name}
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
                                    {product.cart }
                                </span>  
                                <FontAwesomeIcon 
                                    icon={faPlusCircle} 
                                    height={18}
                                    style={{cursor: 'pointer'}} 
                                    onClick={() => {global.addToCart(product.id)}}
                                />
                            </div>
                        </ProductCart>
                    )
                } 
                
            })}
            frete: {shipping} <br/>
            subtotal: {subtotal.toFixed(2).toString().replace('.', ',')} <br/>
            total: {(shipping + subtotal).toFixed(2).toString().replace('.', ',')}
        </Cart>
    )
}

export default CartComponent;

const Cart = styled.div`
    position: fixed;
    right: 0;
    top: 120px;
    height: calc(100% - 120px);
    width: calc(40vw - 80px);
    background: var(--color-background-cart);
`;

const ProductCart = styled.div`
    width: 80%;
    margin: 0 auto;
    background: #FFFFFF;
    border-radius: 10px 5px;
    border: 3px solid var(--color-secundary);
`;
