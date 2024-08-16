import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sing Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Si ya tiene una cuenta<span> Inicie sesión aquí</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>Al continuar, acepto las condiciones de uso y la política de privacidad.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
