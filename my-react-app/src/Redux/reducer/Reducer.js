import {combineReducers} from 'redux';
import { ProductReducer } from './product-reducer/ProductReducer';
import { ProductReducer1 } from './product-reducer/ProductReducer1';


export const reducer = combineReducers(
    {
        //ProductsData : ProductReducer 
        ProductsData1 : ProductReducer1
    }
   
)