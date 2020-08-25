import React from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import {
    Content, 
    TableHeader, 
    ProductTable,
    ProductsRow,
    SingleProductRow,
    TotalRow,
} from './styles';

const ShoppingCart = () => {
    return (
        <>
            <GlobalStyles />
            <h1>Carrinho de Pedidos</h1>
            <Content>
                <ProductTable>
                    <TableHeader>
                        <h3>Quantidade</h3>
                        <h3>Nome</h3>
                        <h3>Valor</h3>
                    </TableHeader>
                    <ProductsRow>
                        <SingleProductRow>
                            <p>1</p>
                            <p>Apple Iphone XR</p>
                            <p>R$ 4.000,00</p>
                        </SingleProductRow>
                        <SingleProductRow>
                            <p>1</p>
                            <p>Samsung Galaxy Note</p>
                            <p>R$ 4.000,00</p>
                        </SingleProductRow>
                    </ProductsRow>
                    <TotalRow>
                        <p>Total:</p>
                        <strong>R$ 8.000,00</strong>
                    </TotalRow>
                </ProductTable>
            </Content>
        </>
    );
}

export default ShoppingCart;