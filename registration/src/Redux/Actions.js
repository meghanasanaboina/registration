import axios from 'axios';

 const BaseUrl = 'http://test.e-prathibha.com/apis';
export const loginUser = ({email,password,navigate}) => {
    //console.log(password)
    //console.log(email)

    const formData = new FormData();
    
    formData.append('email',email)
    formData.append('password',password)

    return async(dispatch) => {
        try{
        await axios.post(`${BaseUrl}/login`,formData)
        .then(res => {console.log("response from api",res.data);
                if(res.status===200){
                        dispatch({type:'LOGIN',payload:res.data});
                        navigate('/Premiumexams');    
                }    
             
                    })
        }catch(err){
            console.error(err);
        }            
        
    }
}

export const registerUser= ({email, name, phone, photo , password,
    confirmPassword,navigate}) => {
    //console.log(password)
    //console.log(email)

    const formData = new FormData();
    //console.log('data in form',formData)
    formData.append('email',email)
    formData.append('name',name)
    formData.append('phone',phone)
    //formData.append('photo',photo)
    formData.append('password',password)
    formData.append('confirmPassword',confirmPassword)

    
    return async(dispatch) => {
        try{
        await axios.post(`${BaseUrl}/register`,formData)
        .then(res => {console.log("response from api",res.data);

        if(res.status===200){
                dispatch({type:'REGISTER',payload:res.data})
                navigate('/EmailVerification')
            }
                    })
     }catch(err){
        console.error(err);
     }            
    }
}

export const verifyUser= ({reg_code,navigate}) => {
    

    const formData = new FormData();
    //console.log('data in form',formData)
    formData.append('reg_code',reg_code)
    

    // const headers = {'Content-type' : 'application/json'}
    return async(dispatch) => {
        try{
        await axios.post(`${BaseUrl}/verifyEmail`,formData)
        
        .then(res => {console.log("response from api",res.data)
                if(res.status===200){

                        dispatch({type:'VERIFY',payload:res.data})
                        alert('email verify successfull');
                        navigate('/')
                       
                }
                    
            })
        }catch(err){
            console.error(err);
        }    
    }
}

export const freeExamList = ({state2}) => {
    

    const formData ={
        email:"mm@gmail.com",
        name:"mm",
        phone:"6785",
        password:"mm",
        confirmPassword:"mm",
    };

   console.log(state2);
     let config={
     headers : { 
        id : `${state2.Id}`,
        server_key : "3w99V63pW7tJ7vavGXtCKo8cp",
        tokenu : `${state2.Token}`,
       }          
     }

    //  console.log(state2.Token);
    //  console.log(state2.Id);
     return async(dispatch) => {
        try{
        await axios.post(`${BaseUrl}/test_free_exam`,formData,config)
        .then(res => {console.log("response from api",res.data);

                if(res.status===200){
                        dispatch({type:'EXAMLIST',payload:res.data})
                        console.log(res.data);
                        //navigate('/')
                    }
                    })
        }catch(err){
            console.error(err);
        }
        
    }
}

export const premiumExam = ({state2}) =>{

    const formData ={
        email:"mm@gmail.com",
        name:"mm",
        phone:"6785",
        password:"mm",
        confirmPassword:"mm",
    };

    console.log(state2);
    let config={
        headers : { 
           id : `${state2.Id}`,
           server_key : "3w99V63pW7tJ7vavGXtCKo8cp",
           tokenu : `${state2.Token}`,
          }          
        }

    return async(dispatch) => {
        try{
        await axios.post(`${BaseUrl}/premium_exam`,formData,config)
        .then(res => {console.log("response from api",res.data);

                if(res.status===200){
                        dispatch({type:'PREMIUMEXAMLIST',payload:res.data})
                        console.log(res.data);
                        //navigate('/')
                    }
                    })
        }catch(err){
            console.error(err);
        }
        
    }
    
}

export const questionPaper = ({state2,id}) =>{
   

    let config = {
        headers : {
            id : `${state2.Id}`,
            server_key : "3w99V63pW7tJ7vavGXtCKo8cp",
            tokenu : `${state2.Token}`
        }
    }

    return async(dispatch)=>{
        try{
            const response= await axios.get(`${BaseUrl}/start_exam?examId=${id}`,config)
            console.log(response);
            if(response.status===200){
                dispatch({
                    type:"EXAMQUESTIONS",payload:response.data.data.exam
                })
            }
        }catch(error){
            console.error(error);
        }
    }
}

export const endExam = ({id,state2}) => {
   console.log(state2)
    let config = {
        headers : {
            id : `${state2.Id}`,
            'server_key' : '3w99V63pW7tJ7vavGXtCKo8cp',
            'tokenu' : `${state2.Token}`,
        }
    }

    const postData ={
        examId:`${id}`,
         qno: 1,
    }

    return async (dispatch) =>{
      try{
        const res =await axios.post(`${BaseUrl}/finishExam`,postData,config)
        console.log(res);

        if(res.status===200){
            dispatch({type:"ENDEXAM",payload:res.data})
        }
      }catch(err){
        console.error(err);
      }
    }
}