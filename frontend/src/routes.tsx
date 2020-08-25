import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingChart';
import { Wrapper } from './styles/wrapper';
import Header from './components/header';

const Routes = () => {
    return (
        <BrowserRouter>
            <Wrapper>
                <Header />
                <Route component={Home} path='/' exact />
                <Route component={ProductDetails} path='/products/:id' />
                <Route component={ShoppingCart} path='/shop' />
            </Wrapper>
        </BrowserRouter>
    );
}

export default Routes;