const initialstate = {
    user :''
}
export const reducer = (state=initialstate , action) =>{
    const {type,payload} = action
    //console.log(payload)
    switch(type){
        case "LOGIN":
            return {...state,user:payload}
        default : 
            return state;
    }
}