import React from 'react'
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
<div class="container-fluid p-0 mb-5">
            <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="w-100 im1" src="img/carousel-1.jpeg" alt="img" /> 
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div class="p-3" style={{maxWidth: "700px"}}>
                                <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Arifa Africa</h6>
                                <h1 class="display-3 text-white mb-4 animated slideInDown">Unleashing Africa's potential through Tech skills</h1>
                                <Link to="/" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Sign In</Link>
                                <Link to="/" class="btn btn-light py-md-3 px-md-5 animated slideInRight">Sign Up</Link>
                                {/* <Outlet to="">Sign</Outlet> */}
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="w-100 im1" src="img/carousel-2.jpeg" alt="img" />
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                          <div class="p-3" style={{ maxWidth: "700px" }}>
                                <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Arifa Africa</h6>
                                <h1 class="display-3 text-white mb-4 animated slideInDown">Unleashing Africa's potential through Tech skills</h1>
                                <Link to="/" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Sign In</Link>
                                <Link to="/" class="btn btn-light py-md-3 px-md-5 animated slideInRight">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
  )
}

export default Carousel