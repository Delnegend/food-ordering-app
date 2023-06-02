import React from 'react';
import AccountMenu from './Components/AccountMenu';
import Home from './Components/Home';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                <Home/>
                </li>
                <li>
                <AccountMenu/>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar