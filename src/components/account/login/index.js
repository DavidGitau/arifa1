import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="section-title text-center text-primary text-uppercase">Sign In</h6>
                    <h1 class="mb-5">Access Our  <span class="text-primary text-uppercase"> Services</span></h1>
                </div>
                <div class="row g-5">
                    <div class="col-lg-6">
                        <div class="row">                                
                            <div class="col-12 text-center">
                                    <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="img/login.jpg"  alt="img"/>
                            </div>
                            <div class="col-12 text-center log">
                                <Link to="/register"><h5 class="text-primary">Create an account</h5></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-6">
                        <div class="wow fadeInUp" data-wow-delay="0.2s">
                            <form>
                                <div class="row g-3">
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <select class="form-select" id="select3">
                                              <option value="1">Student</option>
                                              <option value="2">Tutor</option>
                                              {/* <option value="3">Room 3</option> */}
                                            </select>
                                            <label for="select3">Select </label>
                                          </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" placeholder="Your Name"/>
                                            <label for="name">Your Username</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-floating">
                                            <input type="password" class="form-control" id="password" placeholder="Password"/>
                                            <label for="password">Password</label>
                                        </div>
                                    </div>
                                    <div class="col-9">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Login Now</button>
                                    </div>
                                    <div class="col-3 text-end">
                                        <Link to="/register"><h5 class="fp">forgot password?</h5></Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     )
}

export default Login     