import React,{useState,useContext} from "react";
import { UserContext } from "../../App";
import { reducer } from "../Use Reducer/UseReducerHook";


const UseStateHook = () => {
    const userData = useContext(UserContext);
    console.log(userData);
    const [count,setCount] = useState(0);
    //const [value,dispatch] =useReducer(reducer,0);


    return(
        <div>
            <h1>StateCount : {count}</h1>
            <h1>ReducerCount : {count}</h1>
            <button onClick={()=>setCount(count+1)} className="btn btn-info ms-3">Increment</button>
            <button onClick={()=>setCount(count-1)} className="btn btn-info ms-3">Decrement</button>
        </div>
    )
}
export default UseStateHook;