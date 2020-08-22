import React from 'react';
import {Link} from 'react-router-dom';
import GlobalStyles from '../../styles/GlobalStyles';
import {
    Wrapper,
    Content,
    Product,
    Description,
} from './styles';
import Header from '../../components/header';
import ShopImage from '../../assets/images/shop.jpg';

const Home = () => {
    return (
        <>
            <GlobalStyles />
            
            <Wrapper>
                <Header />
                <h1>Lista de Produtos</h1>
                <Content>
                    <Link 
                        to='/productdetails' 
                        style={{ textDecoration: 'none' }}
                    >
                        <Product>
                            <img src={ShopImage} alt="Product" width="250"/>
                            <Description>
                                <h3>Título do produto</h3>
                                <p>R$ 200,00</p>
                            </Description>
                        </Product>
                    </Link>
                </Content>
            </Wrapper>
        </>
    );
}

export default Home;