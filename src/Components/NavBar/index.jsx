import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className='shares-nav'>
            <div className='shares-logo-div'>

                <Link to="/"><img src="/vectors/logo.svg" alt="logo" className='shares-logo' /></Link>
            </div>
            <div className='shares-links'>
                {/* <Link to="/purpose">Purpose </Link>
                <Link to="/community">Community</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/Learn">Learn</Link>
                <Link to="">United Kingdom</Link> */}
            </div>
        </nav>
    )
}

export default NavBar
