import React from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import { Wrapper, Content, Description } from './styles';
import Header from '../../components/header';
import ShopImage from '../../assets/images/shop.jpg';

const ProductDetails = () => {
    return (
        <>
            <GlobalStyles />

            <Wrapper>
                <Header />
                <h1>Detalhe de Produto</h1>
                <Content>
                    <img src={ShopImage} alt="Product" width="600"/>
                    <Description>
                        <h3>Título do produto</h3>
                        <p>Preço: R$ 200,00</p>
                        <p>Descrição: bla bla</p>
                    </Description>
                </Content>
            </Wrapper>
        </>
    );
}

export default ProductDetails;