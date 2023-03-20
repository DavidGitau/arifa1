import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="section-title text-center text-primary text-uppercase">Sign Up</h6>
                    <h1 class="mb-5">Access Our  <span class="text-primary text-uppercase"> Services</span></h1>
                </div>
                <div class="row g-5">
                    <div class="col-lg-6">
                        <div class="row">                                
                            <div class="col-12 text-center">
                                    <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="img/reg1.jpg"  alt="img"/>
                            </div>
                                <div class="col-12 text-center" style={{marginTop: "3%"}}>
                                    <Link to="/login"><h5 class="text-primary">Have an existing account?</h5></Link>
                                </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="wow fadeInUp" data-wow-delay="0.2s">
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="fname" placeholder="First Name"/>
                                            <label for="fname">First Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="lname" placeholder="Last Name"/>
                                            <label for="lname">Last Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="uname" placeholder="Your Name"/>
                                            <label for="uname">Your Username</label>
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
                                            <input type="password1" class="form-control" id="password1" placeholder="Password"/>
                                            <label for="password1">Password</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-floating">
                                            <input type="password" class="form-control" id="password" placeholder="Password"/>
                                            <label for="password">Confirm Password</label>
                                        </div>
                                    </div>
                                    <div class="col-12 reg">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Register Now</button>
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

export default Register  