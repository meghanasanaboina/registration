import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { loginUser } from "../Redux/Actions";
//import RegisterForm from "./Register";

const LoginForm = () =>{

   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const dispatch = useDispatch();
   const state = useSelector(state => state.user)
    //console.log(state);
    const navigate = useNavigate();

   const handleUserName = (e) =>{
    //console.log(e.target.value);
    setEmail(e.target.value)
   }

   const handlePassword = (e) =>{
    setPassword(e.target.value);
   }

   const handleclicklogin = (e) => {
    e.preventDefault()
    dispatch(loginUser({email,password,navigate}))
    
   }

   const handleclickregister = (e) => {
    e.preventDefault();
    navigate('/Register');
   }
       
    return(
        
        <div className="login" >
            <form className="login_form"  >
                <div >
                <h1>Login Here</h1><br/>
                {/* <input type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br /> */}
                <span style={{fontWeight:'bold'}}>Email: </span><input type="email" placeholder="Email" value={email} onChange={handleUserName} required /><br /><br />
                <span style={{fontWeight:'bold'}}>Password: </span><input type="password" placeholder="Password" value={password} onChange={handlePassword} required /><br /><br />
                <button type="button" className="submit_btn" style={{cursor:'pointer'}} onClick={handleclickregister}>REGISTER</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" className="submit_btn" style={{cursor:'pointer'}} onClick={handleclicklogin}>LOGIN</button>
                </div>
                
            
            </form>
        </div>
       
    );
};

export default LoginForm;