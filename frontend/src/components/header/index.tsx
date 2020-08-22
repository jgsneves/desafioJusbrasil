import React from 'react';
import {Link} from 'react-router-dom';
import GlobalStyles from '../../styles/GlobalStyles';
import { 
    Wrapper, 
    Menu,
    ShoppingDiv,
    RedDot,
    UserDiv,
} from './styles';
import Jusbrasil from '../../assets/icons/jusbrasil.png';
import ShoppingCartLogo from '../../assets/icons/shopping-cart.svg';
import UserLogo from '../../assets/icons/user.svg';

const Header = () => {
    return (
        <>
            <GlobalStyles />

            <Wrapper>
                <Link to='/'>
                    <img src={Jusbrasil} alt="Jusbrasil" width="80"/>
                </Link>
                <Menu>
                    <ShoppingDiv>
                        <img src={ShoppingCartLogo} alt="Cart"/>
                        <p>R$ 500,00</p>
                        <RedDot>
                            5
                        </RedDot>
                    </ShoppingDiv>
                    <UserDiv>
                        <img src={UserLogo} alt="User"/>
                        <p>João</p>
                    </UserDiv>
                </Menu>
            </Wrapper>
        </>
    );
}

export default Header;