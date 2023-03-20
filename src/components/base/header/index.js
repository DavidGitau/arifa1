
import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="container-fluid bg-dark px-0">
            <div class="row gx-0">
                <div class="col-lg-3 bg-dark d-none d-lg-block">
                    <Link to="/" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                        <h1 class=" title m-0 text-primary text-uppercase">Arifa Africa</h1>
                    </Link>
                </div>
                <div class=" col-lg-9">
                    <div class="row gx-0 bg-white d-none d-lg-flex">
                        <div class="col-lg-7 px-5 text-start">
                            <div class="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i class="fa fa-envelope text-primary me-2"></i>
                                <p class="mb-0">arifaafrica@gmail.com</p>
                            </div>
                            <div class="h-100 d-inline-flex align-items-center py-2">
                                <i class="fa fa-phone-alt text-primary me-2"></i>
                                <p class="mb-0">+254758817090</p>
                            </div>
                        </div>
                        <div class="col-lg-5 px-5 text-end">
                            <div class="d-inline-flex align-items-center py-2">
                                <Link class="me-3" to="/"><i class="fab fa-facebook-f"></i></Link>
                                <Link class="me-3" to="/"><i class="fab fa-twitter"></i></Link>
                                <Link class="me-3" to="/"><i class="fab fa-linkedin-in"></i></Link>
                                <Link class="me-3" to="/"><i class="fab fa-instagram"></i></Link>
                                <Link class="/" to="/"><i class="fab fa-youtube"></i></Link>
                            </div>
                        </div>
                    </div>
                    <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                        <Link to="/" class="navbar-brand d-block d-lg-none">
                            <h1 class="m-0 text-primary text-uppercase">Arifa Africa</h1>
                        </Link>
                        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="navigation collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav mr-auto py-0">
                                <Link to="/" class="nav-item nav-link active">Home</Link>
                                <Link to="/" class="nav-item nav-link">About</Link>
                                <Link to="/" class="nav-item nav-link">Services</Link>
                                <Link to="/" class="nav-item nav-link">Rooms</Link>
                                <div class="nav-item dropdown">
                                    <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                    <div class="dropdown-menu rounded-0 m-0">
                                        <Link to="/" class="dropdown-item">Booking</Link>
                                        <Link to="/" class="dropdown-item">Our Team</Link>
                                        <Link to="/" class="dropdown-item">Testimonial</Link>
                
                                    </div>
                                </div>
                                <Link to="/" class="nav-item nav-link">Contact</Link>
                            </div>
                            
                        </div>
                    </nav>
                </div>
            </div>
        </div>
  )
}

export default Header 

