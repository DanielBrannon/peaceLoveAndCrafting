import React, { useState } from 'react'
import './Login.css';
import { auth } from '../../firebase';
import {useNavigate} from 'react-router-dom';

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history('/')
                }
            })
    }

    const register = e => {
        e.preventDefault();
        history('/register')
    }

  return (
    <div className='login'>
        <div className='signInContainer'>
            <form className='loginInformation'>
                <h5>Email:</h5>
                <input
                className='userID'
                type="email"
                placeholder='email or username'
                value={email}
                onChange={event => setEmail(event.target.value)}
                /> 
                <h5>Password:</h5>
                <input
                className='password'
                type="password"
                placeholder='password'
                value={password}
                onChange={event => setPassword(event.target.value)}
                /> 
            </form>
        <button type="submit" className='signInButton' onClick={signIn}>Sign In</button>
        <p>Don't have an account?</p>
        <button type='submit' className='createAccount' onClick={register}>Create an account</button>
        </div>
    </div>
  )
}

export default Login