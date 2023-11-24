import { applyMiddleware } from "redux";
import {createStore} from 'redux';
import thunk from 'redux-thunk';
//import { rootreducer } from "./Reducer";
import { rootreducer } from "./CombineReducers";




export const Store = createStore(rootreducer,applyMiddleware(thunk));