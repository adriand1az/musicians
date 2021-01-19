import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.styles.css';

function Navbar (){
    return(
        <nav className='navbar'>
            <div className='brand-container'>
                <Link to='/' className='brand'>Home</Link>
            </div>

            <div className='options'>
                <Link to='/about' className='options'> About</Link>
                <Link to='/artist' className='options'> Artist</Link>
            </div>
        </nav>
    )
}

export default Navbar;