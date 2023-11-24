import React, { useState } from 'react';
import { verifyUser } from '../Redux/Actions';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const EmailVerification = () =>{

    const [reg_code,setRegcode] = useState('');
    const navigate = useNavigate();
   const dispatch = useDispatch()
    const handleverifyemail = (e) => {
        e.preventDefault()
        dispatch(verifyUser({reg_code,navigate}))
       }
    

    return(
        <div className="emailverification">
            <form className="verification_form">
                <h3>Email Verification</h3>
                <span style={{fontWeight:'bold'}}>Code: </span><input  type="text" placeholder="Enter Code" value={reg_code} onChange={(e) =>{setRegcode(e.target.value)}} required /><br />
            <button type="submit" onClick={handleverifyemail}>Verify</button>
            
            </form>

        </div>
    )
}
export default EmailVerification;