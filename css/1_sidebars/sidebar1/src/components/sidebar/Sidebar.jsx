import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import data from '../../data/data'
import Item from '../item/Item';
import "./styles.css"

const Sidebar = () => {

    const [open, setOpen] =useState(false);

    return (  
        <>
            <div className={open ? "sidebarOpen" : "sidebar"}>
                <div className='icon'>
                    <FontAwesomeIcon 
                        className='hamburger'
                        onClick={() => setOpen(!open)}
                        icon={faBars} 
                    />
                </div>
                <div className='linkContainer'>
                    {data.map(({text, to, icon} )=> <Item open={open} to={to} text={text} icon={icon}/>)}
                </div>
            </div>
        </>
    );
}
 
export default Sidebar;