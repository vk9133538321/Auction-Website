import { useState } from 'react'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Signin() {
  

  return (
    <>
      <div className='container mt-5'>
      <h2 className='text-center' id='h2color'>Sign in</h2>
      <form>
        <div className='mb-3'>
        <label htmlFor="email" className='form-label'>Email address</label>
        <input type='email' className="form-control" id="signin-email" placeholder="Enter your email"/>
        </div>
        <div className='mb-3'>
        <label htmlFor="password" className='form-label'>Password</label>
        <input type='password' className="form-control" id="signin-password" placeholder="Enter your password"/>
        </div>
        <button type="submit" className="btn btn-primary w-100">Sign in</button>
      </form>
      <p className='text-center mt-3'>Don't have an account? <a href="#">Sign up</a></p>
      </div>
    </>
  )
}

export default Signin