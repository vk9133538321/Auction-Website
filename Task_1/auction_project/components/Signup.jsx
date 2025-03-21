import { useState } from 'react'
import './Style.css'

function Signup() {
  

  return (
    <>
      <div className='container mt-5 mb-5'>
      <h2 className='text-center' id='h2color'>Sign up</h2>
      <form>
      <div className='mb-3'>
        <label htmlFor="name" className='form-label'>Full Name</label>
        <input type='name' className="form-control" id="name" placeholder="Enter your email"/>
        </div>
        <div className='mb-3'>
        <label htmlFor="email" className='form-label'>Email address</label>
        <input type='email' className="form-control" id="signup-email" placeholder="Enter your email"/>
        </div>
        <div className='mb-3'>
        <label htmlFor="password" className='form-label'>Password</label>
        <input type='password' className="form-control" id="signup-password" placeholder="Enter your password"/>
        </div>
        <div className='mb-3'>
        <label htmlFor="confirmpassword" className='form-label'>Confirm Password</label>
        <input type='password' className="form-control" id="signup-confirmPassword" placeholder="Confirm your password"/>
        </div>
        <button type="submit" className="btn btn-primary w-100">Sign in</button>
      </form>
      <p className='text-center mt-3'>Already have an account? <a href="#">Sign In</a></p>
      </div>
    </>
  )
}

export default Signup