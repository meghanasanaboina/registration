import React from 'react';
import {Route,Routes} from 'react-router';
import { Cart1 } from '../Components/Cart/Cart1';
import ProductDetail1 from '../Components/products-listing-page/ProductDetail1';
import ProductsListening1 from '../Components/products-listing-page/ProductsListening1';

export const AppRoutes1 = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ProductsListening1 />}/>
                <Route path="/user/:id" element={<ProductDetail1 />} />
                <Route path="../Cart" element={<Cart1 />} />
            </Routes>
        </div>
    )
}