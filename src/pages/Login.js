import React, { useState } from 'react'
import Layout from '../components/Layout'
import '../styles/login.css'
import axios from 'axios'
import { Navigate } from 'react-router-dom'


const Login = () => {

    const [phoneNumber,setPhoneNumber] = useState('');
    const [password,setPassword] = useState('');
    const [redirectToProfile,setRedirectToProfile] = useState(false)
   

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            const response =  await axios.post('http://127.0.0.1:8000/api/login/',{
                phone_number:phoneNumber,
                password:password
            });
            const token = response.data.token;
            localStorage.setItem('token',token)
            setRedirectToProfile(true)
            return <Navigate to="/profile"/>
            
        } catch (error) {
            console.log('login error',error)
        }
    }

    if(redirectToProfile){
        return <Navigate to="profile"/>
    }

  return (
    <Layout>
            <div class="form-container">
      <h2>Login</h2>
      <form class="login-form" onSubmit={handleSubmit}>
        <div>
          <input type="text" id="phoneNumber" placeholder="Phone Number" required value={phoneNumber} 
          onChange={(e)=> setPhoneNumber(e.target.value)} />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <p class="toggle-form">Not registered? Click here to register</p>
      </form>
      </div>
    </Layout>
  )
}

export default Login