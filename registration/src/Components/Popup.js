import React from 'react';
import { useSelector } from "react-redux";
import './Popup.css';

 export const Popup = (props) => {

    const endexamstate = useSelector((state) =>state.EndExamreducer.endexamuser)
    console.log(endexamstate);
    return props.trigger?(
        <div className='popup'>
            <div className='popup-inner'>
                <form>
                    <h2>{endexamstate.data}</h2>
                    <button onClick={()=>props.setTrigger(false)}>Close</button>
                    
                </form>
            </div>
          
        </div>
     ) : '';

};


