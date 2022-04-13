import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../FirebaseInit'
import './SignUp.css'

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate= useNavigate()

const [ createUserWithEmailAndPassword ,user]= useCreateUserWithEmailAndPassword(auth)











const handleEmailBlur = event=>{
    setEmail(event.target.value)
}
const handlePasswordBlur = event=>{
    setPassword(event.target.value)
}


const handleConfirmPasswordBlur = event=>{
    setConfirmPassword(event.target.value)
}


if (user) {
    navigate("/shop")
}

const handleCreateUser = event=>{
    event.preventDefault();
    if(password !== confirmPassword){
        setError('password did not match')
        return;
    }
    if (password.length < 6) {
        setError('passowrd must 6 charcaters long')
        return;
        
    }

createUserWithEmailAndPassword(email, password);

}


    return (
        <div className='form-container'>
            <div>

                <h1 className='form-title'>SignUp Here</h1>

                <form onSubmit={handleCreateUser}>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input   onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input   onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password ">Confirm Password</label>
                        <input    onBlur={handleConfirmPasswordBlur} type="password" name=" confirm-password" id="" required/>
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" required/>
                </form>
                <p className='link-para1'>Already have an Account?<Link className='link-para' to="/login">Log In </Link>
                </p> 
            </div>
        </div>
    );
};

export default SignUp;