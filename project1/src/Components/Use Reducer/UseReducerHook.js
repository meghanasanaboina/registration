import React , {useReducer,useContext} from 'react';

import { UserContext } from '../../App';

export const reducer = (currentState,action) => {
    switch(action.type){
        case 'INCREMENT':
                        return currentState + 1;
        case 'DECREMENT':
                        return currentState - 1;
        default:
                 return currentState;
    }
}
export const UseReducerHook = () => {
    
    const [count,dispatch] =useReducer(reducer,0);
    // console.log(count)

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={()=>dispatch({type:"INCREMENT", payload: 1})} className="btn btn-info ms-3">Increment</button>
            <button onClick={()=>dispatch({type:"DECREMENT", payload: 1})} className="btn btn-info ms-3">Decrement</button>
        </div>
    )
}
export default UseReducerHook;