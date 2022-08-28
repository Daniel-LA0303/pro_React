import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import './Navbar.css';

 const NavBar = ({}) => {
    //States
    const [sidebar, setSidebar] = useState(false);

    //Functions
    const showSidebar= () => setSidebar(!sidebar)


     return (  
         <>
            <IconContext.Provider
                value={{color: 'red'}}
            >
                <div className='navbar'>
                    <Link to="#" className='menu-bars'>
                        <FontAwesomeIcon  className='bg-icon' icon={faBars} onClick={showSidebar}></FontAwesomeIcon>
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                                <FontAwesomeIcon className='bg-icon' icon={faXmark} onClick={showSidebar}></FontAwesomeIcon>
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
         </>
     );
 }
  
 export default NavBar;