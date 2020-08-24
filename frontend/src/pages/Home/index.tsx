import React from 'react';
import {Link} from 'react-router-dom';
import GlobalStyles from '../../styles/GlobalStyles';
import {
    Content,
    Product,
    Description,
} from './styles';
import {Products} from '../../components/Products/products';

const Home = () => {
    return (
        <>
            <GlobalStyles />
            <h1>Lista de Produtos</h1>
            <Content>
                    {Products.map(product => (
                        <Link 
                            to={`/productdetails/${product.id}`} 
                            style={{ textDecoration: 'none' }}
                        >
                            <Product key={product.id}>
                                <img 
                                    src={product.image} 
                                    alt="Product"
                                    width="300"/>
                                <Description>
                                    <h3>{product.name}</h3>
                                    <p>R$ {product.price}</p>
                                </Description>
                            </Product>
                        </Link>
                    ))}
            </Content>
        </>
    );
}

export default Home;