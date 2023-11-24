import { LOAD_ANS,LOAD_BUTTONS,LOAD_CLEAR,LOAD_BACKSPACE } from "./calculator.actionTypes";

export const loadButtons = (number) => {
    return{
        type:LOAD_BUTTONS,
        payload : number
    }
}

export const loadAns = (number) => {
    return{
        type:LOAD_ANS,
        payload : number
    }
}
//all clear
export const loadClear = () => {
    return{
        type:LOAD_CLEAR,
        
    }
}
//backspace one
export const loadBackspace = () => {
    return{
        type:LOAD_BACKSPACE,
        
    }
}