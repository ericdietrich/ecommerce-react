import React, {useContext, useEffect, useState} from 'react';
import styled, { keyframes } from 'styled-components';
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
        <Cart className={global.showCart ? 'show' : 'hide'}>
            { global &&
            global.products.map((product) => {
                if (product.cart !== 0) {
                    let imageSource  = require(`../../assets/${product.image}`);

                    return (
                        <ProductCart key={product.id}>
                            {global.emptyCart}
                            <img src={imageSource.default} alt='Produto' height={60} />
                            <div>
                                <div>{product.name}</div>
                                <div>
                                    {product.cart} X {product.price.toFixed(2).toString().replace('.', ',')} = R$ {(product.cart * product.price).toFixed(2).toString().replace('.', ',')}
                                </div>
                                
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
                            </div>
                            
                        </ProductCart>
                    )
                } 
                
            })}
            
            { (!global.emptyCart) 
                ? 
                <CartValues>
                    <div className='title'>Resumo do Pedido</div>
                    <div>
                        <span>Total dos itens</span>
                        <span>R$ {subtotal.toFixed(2).toString().replace('.', ',')}</span>
                    </div>
                    
                    <div>
                        <span>Frete (grátis acima de R$250,00)</span>
                        <span>{(shipping !== 0) ? `R$${shipping.toFixed(2)}` : 'Grátis'}</span>
                    </div>
                    <hr/>
                    <div>
                        <span>Total do pedido</span>
                        <span>R$ {(shipping + subtotal).toFixed(2).toString().replace('.', ',')}</span>
                    </div>
                </CartValues> 
                :
                <CartValues>
                    <div className='title' style={{margin: 0}}>Carrinho Vazio</div>
                </CartValues>
                
            
            }
            
            
        </Cart>
    )
}

export default CartComponent;

const show = keyframes`
    from {
        opacity: 0;
        transform: translate3d(600px, 0, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;

const hide = keyframes`
    from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    to {
        opacity: 0;
        transform: translate3d(600px, 0, 0);
    }
`;

const Cart = styled.div`
    position: fixed;
    right: 0px;
    top: 120px;
    height: calc(100% - 120px);
    width: calc(50vw);
    background: var(--color-background-cart);
    overflow-y: auto;
    padding: 20px 0 40px;
    box-shadow: 5px 6px 15px #333333a3;
    &.show {
        animation: ${show} .5s forwards;
    }
    
    &.hide {
        visibility: hidden;
        opacity: 0;
    }

    @media (max-width: 600px) {
        width: calc(100vw);
    } 
`;

const ProductCart = styled.div`
    display: flex;
    width: 80%;
    margin:5px auto;
    padding: 10px;
    background: #FFFFFF;
    border-radius: 10px;
    border: 3px solid var(--color-secundary);
`;

const CartValues = styled.div`
    padding: 10px;
    width: 80%;
    margin: 40px auto 0;
    background: #FFFFFF;
    border-radius: 10px;
    border: 3px solid var(--color-primary-light);
    div {
        display: flex;
        justify-content: space-between;
        &.title {
            font-size: 2rem;
            margin-bottom: 10px;
        }
    }
`;
