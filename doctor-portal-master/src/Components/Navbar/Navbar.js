import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {
    const idToken = sessionStorage.getItem('token')
    const navigate = useNavigate()
    return (
        <div id="Navbar">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
             <div className="container-fluid">
                <Link className="navbar-brand" to="/">Doctors Portal</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                 </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">

                    <li className="nav-item">
                      <Link to="/" className='nav-link active'>Home</Link>
                    </li>

                    <li class="nav-item">
                      <Link to="/" className='nav-link'>About</Link>
                    </li>

                    <li class="nav-item">
                      <Link to="/appoinmentPage" className='nav-link'>Appoinment</Link>
                    </li>

                      <li class="nav-item">
                        <Link to="/" className='nav-link'>Reviews</Link>
                     </li>

                     <li class="nav-item">
                        <Link to="/" className='nav-link'>Contact Us</Link>
                     </li>

                     <li class="nav-item">
                       <Link to="/login" className='nav-link'>{idToken? <span onClick={() => sessionStorage.clear()}>Log Out</span>: <span onClick={() => navigate('/login')}>Log In</span>}</Link>
                     </li>

                   </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
    );
};

export default Navbar;

