import React from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import { Content, Description, Button } from './styles';
import {RouteComponentProps, useHistory} from 'react-router-dom'
import { Products } from '../../components/Products/products';

interface IProps extends RouteComponentProps<{id:string}> {
    id: number;
    name: string;
    image: string;
    price: number;
    details: string;
}

const ProductDetails = (props: IProps) => {
    const {id} = props.match.params;
    const product = Products.find(product=> product.id === id);
    const historyUrl = useHistory();

    if(!product) {
        historyUrl.push('/');
    }

    function HandleBuyButtonClick() {
      //
    }
    
    return (
        <>
            <GlobalStyles />
            <h1>Detalhe de Produto</h1>
            <Content>
                <img src={product?.image} alt="Product" width="600"/>
                <Description>
                    <h2>{product?.name}</h2>
                    <p>Preço: R$ {product?.price}</p>
                    <p>Descrição: {product?.details}</p>
                    <Button onClick={HandleBuyButtonClick}>
                        Comprar
                    </Button>
                </Description>
            </Content>
        </>
    );
}

export default ProductDetails;