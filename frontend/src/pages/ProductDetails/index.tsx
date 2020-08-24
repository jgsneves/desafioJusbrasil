import React from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import { Content, Description } from './styles';
import ShopImage from '../../assets/images/shop.jpg';

const ProductDetails = () => {
    return (
        <>
            <GlobalStyles />
            <h1>Detalhe de Produto</h1>
            <Content>
                <img src={ShopImage} alt="Product" width="600"/>
                <Description>
                    <h3>Título do produto</h3>
                    <p>Preço: R$ 200,00</p>
                    <p>Descrição: bla bla</p>
                </Description>
            </Content>
        </>
    );
}

export default ProductDetails;