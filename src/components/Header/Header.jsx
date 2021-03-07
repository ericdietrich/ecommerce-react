import React, {useState} from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/container';
import cartIcon from '../../assets/cart-icon.svg';


const HeaderComponent = () => {
    const logoHeader = 'https://source.unsplash.com/featured/?logo';
    const [cartSelected, setCartSelected] = useState(false);

    return (
        <Header>
            <Container style={{justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                    <img src={logoHeader} alt='logo' className='logo' />
                    <span style={{marginLeft: 20}}>E-Commerce Supera</span>    
                </div>
               <div className={`cart ${cartSelected ? 'selected' : ''}`} onClick={() => {setCartSelected(!cartSelected)}}>            
                    <img src={cartIcon} height={30} width={30} /> 
               </div>
                
            </Container>
        </Header>
    )
}

export default HeaderComponent;

const Header = styled.header`
    margin-bottom: 60px;
    background: var(--color-primary-darker);
    color: var(--color-title-in-primary);
    font-size: 4rem;
    div {
        padding: 10px 0;
        display: flex;
        align-items: center;
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
`;