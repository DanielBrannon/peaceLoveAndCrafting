import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import './register.css';

function Register() {

    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const register = e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth)
            if (auth) {
                history('/')
            }
        })
        .catch( err => alert(err.message))
    }
  return (
    <div className='registerContainer'>
        <form className='loginInformation'>
        <h5>Name:</h5>
            <input
            className='userName'
            type="text"
            placeholder='your name'
            value={name}
            onChange={event => setName(event.target.value)}
            /> 
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
        <button type='submit' className='createAccount' onClick={register}>Create an account</button>
    </div>
  )
}

export default Register