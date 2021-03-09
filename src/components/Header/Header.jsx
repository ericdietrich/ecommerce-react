import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/container';
import cartIcon from '../../assets/cart-icon.svg';
import {GlobalContext} from '../../GlobalContext';


const HeaderComponent = () => {
    const global = useContext(GlobalContext);
    const logoHeader = 'https://source.unsplash.com/featured/?video-game';
    const [cartSelected, setCartSelected] = useState(false);

    return (
        <Header>
            <Container style={{justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                    <img src={logoHeader} alt='logo' className='logo' />
                    <span className='title' style={{marginLeft: 20}}>E-Commerce Supera</span>    
                </div>
               <div className={`cart ${global.showCart ? 'selected' : ''}`} onClick={() => {global.setShowCart(!global.showCart)}}>            
                    <img 
                        src={cartIcon} 
                        alt='carrinho' 
                        height={30} 
                        width={30} 
                        onClick={() => {global.setShowCart(!global.showCart)}}
                    /> 
               </div>
            </Container>
        </Header>
    )
}

export default HeaderComponent;

const Header = styled.header`
    position: fixed;
    width: 100vw;
    margin-bottom: 60px;
    background: var(--color-primary-darker);
    color: var(--color-title-in-primary);
    font-size: 4rem;
    div {
        padding: 10px 0;
        display: flex;
        align-items: center;
    }

    .title {
        font-size: 38px;
    }

    .logo {
        height: 80px;
        width: 80px;
        border-radius: 50%;
        object-fit: cover;
    }

    .cart {
        background: var(--color-primary-lighter);
        border-radius: 50%;
        padding: 10px;
        &:hover {
            background: var(--color-primary-light)
        }

        &.selected {
            background: #ee4455;
            box-shadow: inset 0 0 5px #000000;
        }
    }

    @media (max-width: 600px) {
        .title {
            font-size: 28px;
        }
        
    }
`;