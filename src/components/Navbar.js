import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from './Button';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    };
    // SIGN UP disappear as you minimise screens
    useEffect(() => {
        showButton()

    }, []
    );


    window.addEventListener("resize", showButton);
    return (
        <>
        <div className='topnav'>
            <h1 className='topheading'>let's tour Kenya together, ticket valid 1 year after purchase!</h1>
            <span className='iconn'></span>
        </div>
        <div className="topnav2">
            <ul className="topnavhorizontal">
                            <li className='nav-item2'>
                            <Link to="/" className='nav-links2' >
                                visitors
                            </Link>
                        </li>
                        <li className='nav-item2'>
                            <Link to="/" className='nav-links2' >
                                Membership
                            </Link>
                        </li>
                        <li className='nav-item2'>
                            <Link to="/" className='nav-links2'>
                            Travel Trade
                            </Link>
                        </li>
                        
            </ul>

        </div>
            <nav className='navbar'>

                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                     <h1 className='logo'>  City.tour</h1>
                     <p className='lopo'> tour kenya cities</p> 
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times':'fas fa-bars' } />
          </div>
                    <ul className={click ? "nav-menu-active" : "nav-menu"}>
                        
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/Tours" className='nav-links' onClick={closeMobileMenu}>
                                Tours
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/About" className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile'   onClick={closeMobileMenu}>
                             Sign Up
                           </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
                </div>
            </nav>
        </>

    );
}

export default Navbar