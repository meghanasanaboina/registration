import axios from 'axios';

export const loginUser = ({email,password}) => {
    //console.log(password)
    //console.log(email)

    const formData = new FormData();
    //console.log('data in form',formData)
    formData.append('email',email)
    formData.append('password',password)

    // const headers = {'Content-type' : 'application/json'}
    return async(dispatch) => {
        await axios.post("http://test.e-prathibha.com/apis/login",formData)
        .then(res => {console.log("response from api",res.data);
                        dispatch({type:'LOGIN',payload:res.data})})
    }
}