import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li assName="nav-item">
                                <Link className="nav-link" to="/">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/add">Add Product</Link>
                            </li>
                        </ul>
                        <ul className="d-flex">
                            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                            <Link className="btn btn-outline-success " to="/login">Login</Link>
                            <Link className="btn btn-outline-success ms-2" to="/register">Register</Link>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )


}
export default Header