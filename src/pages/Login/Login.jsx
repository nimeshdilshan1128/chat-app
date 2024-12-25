import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'

const Login = () => {

    const [currState,setCurrState] = useState('Sign Up');

  return (
    <div className='login'> 
        <img src={assets.logo_big} className="logo" alt="" />
        <form className='login-form'>
           <h2>{currState}</h2>
           {currState === "Sign Up"? <input type="text" placeholder='User Name' className="form-input" required />: null}
           <input type="email" placeholder='Email Address' className="form-input" required/>
           <input type="text" placeholder='Password' className="form-input" required/>
           <button type='submit'>{currState === "Sign Up"? "Create Account":"Login now"}</button>
           <div className="login-term">
                <input type="checkbox" />
                <p>agree to the terms of use & privacy policy</p>
           </div>
           <div className="login-forgot">
            <p>
                {
                    currState === "Sign Up"
                    ?<p className="login-toggle">Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p>
                    :<p className="login-toggle">Create an account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
                }

            </p>
           </div>
        </form>
    </div>
  )
}

export default Login