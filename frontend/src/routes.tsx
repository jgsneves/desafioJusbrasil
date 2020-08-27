import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingChart';
import { Wrapper } from './styles/wrapper';
import Header from './components/header';
import {Provider} from 'outstated';
import Store from './store/store';

const Routes = () => {
    return (
        <BrowserRouter>
            <Provider stores={[Store]}>
                <Wrapper>
                    <Header />
                    <Route component={Home} path='/' exact />
                    <Route component={ProductDetails} path='/products/:id' />
                    <Route component={ShoppingCart} path='/shop' />
                </Wrapper>
            </Provider>
        </BrowserRouter>
    );
}

export default Routes;