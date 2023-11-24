import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import striptags from "striptags";
import { endExam, questionPaper } from "../Redux/Actions";
import { Popup } from "./Popup";


const QuestionPaper = () =>{


    const {LoginReducer , ExamQuestionReducer} = useSelector(state =>state)

    const {id} = useParams();
    const dispatch = useDispatch();
    const state2 = (LoginReducer.loginuser.data)
    
    useEffect(() => {
        dispatch(questionPaper({ id,state2}))
        
    },[])
    const state3 = (ExamQuestionReducer.examquestionuser)   
    console.log(state3);

    const [buttonPopup,setButtonPopup] = useState(false);

    const handleClick = () =>{
        dispatch(endExam({id,state2}))
       
    }

    return (state3)?(
        <>
        <h3>Question Paper - I</h3>
        {state3 && state3.length>0 && state3.map((element)=>{
            return ( <>
            
            <div class="card">
            <div class="card-header">
            <h5 key={element.id} style={{textAlign:'left'}}>Q.{striptags(element.Question.question.above)}</h5></div>
            <div class="list-group list-group-flush">
            <p class="list-group-item" style={{textAlign:'left'}}>i.{striptags(element.Question.option1)}</p>
            <p class="list-group-item" style={{textAlign:'left'}}>ii.{striptags(element.Question.option2)}</p>
            <p class="list-group-item" style={{textAlign:'left'}}>iii.{striptags(element.Question.option3)}</p>
            <p class="list-group-item" style={{textAlign:'left'}}>iv.{striptags(element.Question.option4)}</p>
            </div>
            </div>
            </>)
            
        })}
            <button onClick = {()=>setButtonPopup(true)}>Submit</button>
            <button onClick = {handleClick}>Data</button>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
       
      </> ): "Loading...";
    
    
};

export default QuestionPaper;