import { ACTION_TYPES } from "../../types/ActionTypes";

const initialState = {
    products : [],
    cartData : []
}

export const ProductReducer = (state = initialState,action) => {
    console.log(action);

    switch(action.type){
        case ACTION_TYPES.ADD_TO_CART :
            return {...state, cartData : [...state.cartData,action.payload]}
       
        case ACTION_TYPES.REMOVE_FROM_CART :
             const filteredProduct = state.cartData.filter((cartitem)=> cartitem.id !== action.payload)
             return {...state,cartData : filteredProduct}
       
            default :
                return state
    }
}