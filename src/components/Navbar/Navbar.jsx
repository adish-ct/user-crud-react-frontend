import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <Link to='/'><h6>Home</h6></Link>
            <Link to='/signup'><h6>Signup</h6></Link>
            <Link to='/login'><h6>Login</h6></Link>
        </div>
    )
}

export default Navbar
