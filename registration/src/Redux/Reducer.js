const initialstate = {
    registeruser : {},
    verifyuser : {},
    loginuser : {},
    examlistuser :[],
    premiumexamlistuser : [],
    examquestionuser :[],
    endexamuser :{},
}

// export const rootreducer = (state = initialstate,action) =>{
//     const {type,payload} = action
//     switch(type){
//         case "REGISTER" :return {...state,registeruser:payload}

//         case "VERIFY" :return {...state,verifyuser:payload}

//         case "LOGIN" :return {...state,loginuser:payload}

//         case "EXAMLIST" :return {...state,examlistuser:payload}

//         case "EXAMQUESTIONS" :return {...state,examquestionuser:payload}

//         case "ENDEXAM" :return {...state,endexamuser:payload}

//         default:return state;

//     }
// }


export const registerReducer = (state = initialstate,action) =>{
    const {type,payload} = action

    switch(type){
        case "REGISTER" :return {...state,registeruser:payload}
        default:return state;
    }
}

export const verifyReducer = (state = initialstate,action) =>{
    const {type,payload} = action

    switch(type){
        case "VERIFY" :return {...state,verifyuser:payload}
        default:return state;
    }
}

export const loginReducer = (state = initialstate,action) =>{
    const {type,payload} = action

    switch(type){
        case "LOGIN" :return {...state,loginuser:payload}
        default:return state;
    }
}

export const examlistReducer = (state = initialstate,action) =>{
    const {type,payload} = action

    switch(type){
        case "EXAMLIST" :return {...state,examlistuser:payload}
        default:return state;
    }
}

export const premiumexamlistReducer = (state = initialstate,action) =>{
    const {type,payload} = action

    switch(type){
        case "PREMIUMEXAMLIST" :return {...state,premiumexamlistuser:payload}
        default:return state;
    }
}

export const examquestionReducer = (state = initialstate,action) =>{
    const {type,payload} = action

    switch(type){
        case "EXAMQUESTIONS" :return {...state,examquestionuser:payload}
        default:return state;
    }
}

export const endExamReducer = (state=initialstate,action) =>{
    const {type,payload} =action

    switch(type){
        case "ENDEXAM" :return {...state,endexamuser:payload}
        default:return state;
    }
}