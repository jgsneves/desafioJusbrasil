import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path='/' exact />
            <Route component={ProductDetails} path='/productdetails' />
        </BrowserRouter>
    );
}

export default Routes;