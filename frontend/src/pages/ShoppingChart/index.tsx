import React from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import {
    Content, 
    Table,
    TableData,
    TableHeader,
    TableRow,
} from './styles';

const ShoppingCart = () => {
    return (
        <>
            <GlobalStyles />
            <h1>Carrinho de Pedidos</h1>
            <Content>
                <Table>
                    <TableRow>
                        <TableHeader>Quantidade</TableHeader>
                        <TableHeader>Produto</TableHeader>
                        <TableHeader>Valor</TableHeader>
                    </TableRow>
                    <TableRow>
                        <TableData>1</TableData>
                        <TableData>Smartphone Samsung Galaxy s30</TableData>
                        <TableData>R$ 4.000,00</TableData>
                    </TableRow>
                </Table>
            </Content>
        </>
    );
}

export default ShoppingCart;