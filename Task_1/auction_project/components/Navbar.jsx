import { useState } from 'react'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

function Navbar() {
  

  return (
    <>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Auction House</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Auctions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <a className="btn btn-primary mx-2" href="/signin">Sign In</a>
          <a className="btn btn-outline-primary" href="/signup">Sign Up</a>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar