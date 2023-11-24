import React from "react";
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loginUser } from "../Redux/Actions";

const LoginForm = () =>{

   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const dispatch = useDispatch();
   const state = useSelector(state => state.user)
   //console.log(state);

   const handleUserName = (e) =>{
    //console.log(e.target.value);
    setEmail(e.target.value)
   }

   const handlePassword = (e) =>{
    setPassword(e.target.value);
   }

   const handleclick = (e) => {
    e.preventDefault()
    dispatch(loginUser({email,password}))
   }
     
    return(
        <div className="login">
            <form className="login_form">
                <h1>Login Here</h1>
                {/* <input type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br /> */}
                <input type="email" placeholder="Email" value={email} onChange={handleUserName} required /><br />
                <input type="password" placeholder="Password" value={password} onChange={handlePassword} required /><br />
                <button type="button" className="submit_btn" style={{cursor:'pointer'}} onClick={handleclick}>Submit</button>
            </form>
        </div>
    );
};

export default LoginForm;