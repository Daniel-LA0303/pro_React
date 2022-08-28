import React from 'react';
import { NavLink } from 'react-router-dom';
import "./styles.css"

const Item = ({text, to, icon, open}) => {
     return (  
        <NavLink
            className={open ? "linkOpen" : "normal"}
            to={to}
        >
            <div>{icon}</div>
            {open && <p>{text}</p>}
        </NavLink>
     );
 }
  
 export default Item;
