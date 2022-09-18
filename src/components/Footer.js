import React from 'react'
import Lotus from "../images/lotus.png"

export const Footer = () => {
    return (
        <div className='p-0 m-0 px-3 bg-dark text-white'>
            <footer className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className='d-flex d-inline-flex'>
                            <img alt="Lotus icon" src={Lotus} width="32" height="32" />
                            <h3 className="m-0 pt-1 pt-md-0 ms-2">The Beauty Store</h3>
                        </div>
                        <small className="d-block mb-3 text-muted">Copyright &copy; 2022</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Resource</a></li>
                            <li><a className="text-muted" href="#">Resource name</a></li>
                            <li><a className="text-muted" href="#">Another resource</a></li>
                            <li><a className="text-muted" href="#">Final resource</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Business</a></li>
                            <li><a className="text-muted" href="#">Education</a></li>
                            <li><a className="text-muted" href="#">Government</a></li>
                            <li><a className="text-muted" href="#">Gaming</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Team</a></li>
                            <li><a className="text-muted" href="#">Locations</a></li>
                            <li><a className="text-muted" href="#">Privacy</a></li>
                            <li><a className="text-muted" href="#">Terms</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}
