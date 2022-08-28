import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faHome, faCirclePlus, faXmark, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'


const NavBar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (  
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink to='/' className='nav-logo'>
                        Code-LA {' '}
                        <FontAwesomeIcon icon={faCode}/>
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'>
                            <NavLink 
                                to='/' 
                                className={`${(isActive) => isActive ? "active" : null} nav-links`}
                                onClick={handleClick}
                            >
                                Home{' '}
                                <FontAwesomeIcon icon={faHome}/>
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink 
                                to='/new-client'   
                                className={`${(isActive) => isActive ? "active" : null} nav-links`}
                                onClick={handleClick}
                            >
                                New Cslient{' '}
                                <FontAwesomeIcon icon={faCirclePlus}/>
                            </NavLink>
                        </li>
                    </ul>
                    <div 
                        className='nav-icon'
                        onClick={() => handleClick() }
                    >
                        <FontAwesomeIcon icon={click ? faXmark : faBarsStaggered }/>
                    </div>
                </div>
            </nav>
        </>
    );
}
 
export default NavBar;