import { ACTION_TYPES } from "../../types/ActionTypes1";

const initialState  = {
    users : [],
    cartData : []
}

export const ProductReducer1 = (state=initialState,action) => {
    console.log(action);

    switch(action.type){
        case ACTION_TYPES.SELECTED_FOR_JOB :
            return {...state,cartData : [...state.cartData,action.payload]}
        
case ACTION_TYPES.NOT_ELEGIBLE :
    const filteredProduct = state.cartData.filter((cartitem) => cartitem.id !== action.payload)
    return {...state,cartData : filteredProduct}
        default : 
                return state
    }
}