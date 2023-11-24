import React from 'react';
import {Route,Routes} from 'react-router';
import { Cart } from '../Components/Cart/Cart';
import ProductDetail from '../Components/products-listing-page/ProductDetail';
import ProductsListing from '../Components/products-listing-page/ProductsListing';

export const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ProductsListing />}/>
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    )
}