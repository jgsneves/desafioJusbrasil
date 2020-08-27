import React from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import {
    Content, 
    Table,
    TableData,
    TableHeader,
    TableRow,
    Button,
} from './styles';
import { useStore } from 'outstated';
import Store from '../../store/store';
import {Trash2} from 'react-feather';

const ShoppingCart = () => {
    const {shoppingCartList, removeItem, cartValue} = useStore(Store);


    return (
        <>
            <GlobalStyles />
            <h1>Carrinho de Pedidos</h1>
            <Content>
                <Table>
                    <tbody>
                        <TableRow>
                            <TableHeader>Quantidade</TableHeader>
                            <TableHeader>Produto</TableHeader>
                            <TableHeader>Valor</TableHeader>
                            <TableHeader>Remover</TableHeader>
                        </TableRow>
                        {shoppingCartList.map((product, index) => (
                            <TableRow key={product.id}>
                                <TableData>{product.count}</TableData>
                                <TableData>{product.name}</TableData>
                                <TableData>R$ {product.price * product.count}</TableData>
                                <TableData>
                                    <Trash2 color="#000000"
                                        onClick={() => removeItem(index)}
                                    />
                                </TableData>
                            </TableRow>
                        ))}
                    <TableRow>
                        <TableData>
                            <p>Total do carrinho: R$ {cartValue}</p>
                        </TableData>
                    </TableRow>
                    </tbody>
                </Table>
                <Button>
                    Finalizar compra
                </Button>
            </Content>
        </>
    );
}

export default ShoppingCart;