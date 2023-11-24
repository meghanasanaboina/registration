import { combineReducers } from "redux";
import { endExamReducer, examlistReducer, examquestionReducer, loginReducer, premiumexamlistReducer, registerReducer, verifyReducer } from "./Reducer";

 

 export const rootreducer = combineReducers({
    RegisterReducer : registerReducer,
    VerifyReducer : verifyReducer,
    LoginReducer : loginReducer,
    ExamListReducer : examlistReducer,
    PremiumExamListReducer: premiumexamlistReducer,
    ExamQuestionReducer : examquestionReducer,
    EndExamreducer : endExamReducer,
 })