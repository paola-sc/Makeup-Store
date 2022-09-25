import React from 'react'
import Lotus from "../images/lotus.png"
import { Link } from 'react-router-dom'
import "../index.css"
export const Footer = () => {
    return (
        <div className='p-0 m-0 bg-dark text-white'>
            <div className="col-11 py-5 mx-auto d-flex justify-content-center">
                <div className="row w-100">
                    <div className="col-12 col-md-4 text-center text-md-start">
                        <Link to="/" className="text-decoration-none text-white">
                            <div className='d-flex d-inline-flex'>
                                <img alt="Lotus icon" src={Lotus} width="32" height="32" />
                                <h3 className="m-0 pt-1 pt-md-0 ms-2">The Beauty Store</h3>
                            </div>
                        </Link>
                        <small className="d-block mb-3 text-muted">Copyright &copy; 2022</small>
                        <div className='d-flex d-inline-flex mb-4'>
                            <i className="fa-brands fa-instagram text-white fs-4 me-3" />
                            <i className="fa-brands fa-facebook text-white fs-4 me-3" />
                            <i className="fa-brands fa-twitter text-white fs-4 me-3" />
                            <i className="fa-brands fa-youtube text-white fs-4" />
                        </div>
                    </div>

                    <div className='col-12 col-md-8 d-flex d-none d-md-flex'>
                        <div className="col-6 col-md">
                            <h5>About</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/about" className="text-decoration-none text-white">Mission</Link></li>
                                <li><Link to="/about" className="text-decoration-none text-white">Vission</Link></li>
                                <li><Link to="/about" className="text-decoration-none text-white">Location</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md mx-2">
                            <h5>Eye Products</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/products/eyeshadow" className="text-decoration-none text-white">Eyeshadow</Link></li>
                                <li><Link to="/products/eyeliner" className="text-decoration-none text-white">Eyeliner</Link></li>
                                <li><Link to="/products/mascara" className="text-decoration-none text-white">Mascara</Link></li>
                                <li><Link to="/products/eyebrow" className="text-decoration-none text-white">Eyebrow</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md mx-2">
                            <h5>Lip Products</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/products/lip_liner" className="text-decoration-none text-white">Lip liner</Link></li>
                                <li><Link to="/products/lipstick" className="text-decoration-none text-white">Lipstick</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md mx-2">
                            <h5>Others</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/products/blush" className="text-decoration-none text-white">Blush</Link></li>
                                <li><Link to="/products/bronzer" className="text-decoration-none text-white">Bronzer</Link></li>
                                <li><Link to="/products/foundation" className="text-decoration-none text-white">Foundation</Link></li>
                                <li><Link to="/products/nail_polish" className="text-decoration-none text-white">Nail Polish</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
