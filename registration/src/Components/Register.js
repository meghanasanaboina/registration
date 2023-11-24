import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../Redux/Actions";
import { useNavigate } from "react-router-dom";


const Register = () =>{

    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] =useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
   

    const handlesubmitRegister = (e) => {
        e.preventDefault()        
        dispatch(registerUser({email,name,phone,password,confirmPassword,navigate }))
       }

    
    
    return(
        <div className="register">
            <form className="Register_Form">
                <h1>RegisterForm</h1>
                <span style={{fontWeight:'bold'}}>Email: </span><input  type="text" placeholder="Enter Email" value={email} onChange={(e) =>{setEmail(e.target.value)}} required /><br /><br />
                <span style={{fontWeight:'bold'}}>Name: </span><input  type="text" placeholder="Enter Name" value={name} onChange={(e) =>{setName(e.target.value)}} required /><br /><br />
                <span style={{fontWeight:'bold'}}>Number: </span><input  type="text" placeholder="Enter Number" value={phone} onChange={(e) =>{setPhone(e.target.value)}} required /><br /><br />
                <span style={{fontWeight:'bold'}}>Password: </span><input  type="text" placeholder="Enter Password" value={password} onChange={(e) =>{setPassword(e.target.value)}} required /><br /><br />
                <span style={{fontWeight:'bold'}}>ConfirmPassword: </span><input  type="text" placeholder="Enter confirmPassword" value={confirmPassword} onChange={(e) =>{setConfirmPassword(e.target.value)}} required /><br /><br />
                <button type="submit" onClick={handlesubmitRegister}>Submit</button>
                
            </form>
           
        </div>
    )
          
   
};
export default Register;