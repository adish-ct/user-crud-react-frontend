import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Navbar/Navbar.css'

function Navbar() {

    // set the components if the user authenticated to serve navbar.
    const authLinks = (
        <>
            <NavLink to='/' className='nav-link'>
                <li className="nav-item nav-link active">
                    Dashboard
                </li>
            </NavLink>
            <li className="nav-item nav-link active">
                <a className='nav-link' href="#">Logout</a>
            </li>
        </>
    )

    // set the components if the user is not authenticated to serve navbar.
    const guestLinks = (
        <>
            <NavLink to='/signup' className='nav-link'>
                <li className="nav-item nav-link active">
                    Signup
                </li>
            </NavLink>
            <NavLink to='/login' className='nav-link'>
                <li className="nav-item nav-link active">
                    Login
                </li>
            </NavLink>
        </>
    )

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/' className='nav-link'>
                        <h3>Site</h3>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavLink to='/' className='nav-link'>
                                <li className="nav-item nav-link active">
                                    Home
                                </li>
                            </NavLink>
                            {/* if user authenticated  */}
                            {authLinks}
                            {/* if user is not authenticated */}
                            {guestLinks}

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar
