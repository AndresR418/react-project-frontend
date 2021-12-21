import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Nav() {

    return (
        <div className='nav-wrapper'>
            <NavLink exact to='/' className="nav-link">Home</NavLink>
            <NavLink exact to='/items' className="nav-link">Items</NavLink>
            <NavLink exact to='/add-item' className="nav-link">Add Item</NavLink>
        </div>
    )
}