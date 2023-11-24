import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { premiumExam } from "../Redux/Actions";


const Premiumexam = ()=>{

    const { LoginReducer, ExamListReducer } = useSelector(state => state)

    const state2 = (LoginReducer.loginuser.data);

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(premiumExam({state2}))
    },[])
    return(
        <div></div>
    )
}

export default Premiumexam;