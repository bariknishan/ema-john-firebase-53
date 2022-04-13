import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../FirebaseInit';
import './LogIn.css'

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate= useNavigate()
    const location= useLocation()
    const from =location.state?.from?.pathname || "/"


    const handleEmailleBlur = event => {

        setEmail(event.target.value)
    }


    const handlePasswordBlur = event => {

        setPassword(event.target.value)
    }


 



    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user){
        navigate (from, {replace:true});
        }


    return (
        <div className='form-container'>
            <div>

                <h1 className='form-title'>LogIn Here</h1>

                <form onSubmit={handleUserSignIn}>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailleBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading</p>
                    }
                    <input className='form-submit' type="submit" value="Login" required />
                </form>
                <p className='link-para1'>New To Ema-John?<Link className='link-para' to="/signup">Create account </Link>
                </p>
            </div>
        </div>
    );
};

export default LogIn;