import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div class="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div class="container pb-5">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-4">
                        <div class="bg-primary rounded p-4">
                            <Link to="/"><h1 class="text-white text-uppercase mb-3">Arifa</h1></Link>
                            <p class="text-white mb-0">
								Download <Link class="text-dark fw-medium" to="/">Arifa – Premium Version</Link>, join today to gain practical skills, earn rewards, and access online jobs in emerging technologies. Don't miss out!
							</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <h6 class="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Kahawa, Nairobi, Kenya.</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+254 758 817090</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                        <div class="d-flex pt-2">
                            <Link class="btn btn-outline-light btn-social" to="/"><i class="fab fa-twitter"></i></Link>
                            <Link class="btn btn-outline-light btn-social" to="/"><i class="fab fa-facebook-f"></i></Link>
                            <Link class="btn btn-outline-light btn-social" to="/"><i class="fab fa-youtube"></i></Link>
                            <Link class="btn btn-outline-light btn-social" to="/"><i class="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12">
                        <div class="row gy-5 g-4">
                            <div class="col-md-6">
                                <h6 class="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                                <Link class="btn btn-link" to="/">About Us</Link>
                                <Link class="btn btn-link" to="/">Contact Us</Link>
                                <Link class="btn btn-link" to="/">Privacy Policy</Link>
                                <Link class="btn btn-link" to="/">Terms & Condition</Link>
                                <Link class="btn btn-link" to="/">Support</Link>
                            </div>
                            <div class="col-md-6">
                                <h6 class="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                                <Link class="btn btn-link" to="/">Software Development</Link>
                                <Link class="btn btn-link" to="/">Graphic Design</Link>
                                <Link class="btn btn-link" to="/">IT Consulting</Link>
                                <Link class="btn btn-link" to="/">Cloud Computing</Link>
                                <Link class="btn btn-link" to="/">Enterprise Solutions</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <Link class="border-bottom" to="/">Arifa Africa</Link>, All Right Reserved. 
							
							Designed By <Link class="border-bottom" to="/">David Gitau</Link>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <Link to="/">Home</Link>
                                <Link to="/">Cookies</Link>
                                <Link to="/">Help</Link>
                                <Link to="/">FQAs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer
