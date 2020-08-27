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
import { useStore } from 'outstated';
import Store from '../../store/store';

const Header = () => {
    const {shoppingCartList, cartValue} = useStore(Store);


    return (
        <>
            <GlobalStyles />

            <Wrapper>
                <Link to='/'>
                    <img src={Jusbrasil} alt="Jusbrasil" width="80"/>
                </Link>
                <Menu>
                    <Link 
                        to='/shop'
                        style={{ textDecoration: 'none' }}
                    >
                        <ShoppingDiv>
                            <img src={ShoppingCartLogo} alt="Cart"/>
                                <p>R$ {cartValue}</p>
                            <RedDot>
                                {shoppingCartList.length}
                            </RedDot>
                        </ShoppingDiv>
                    </Link>
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