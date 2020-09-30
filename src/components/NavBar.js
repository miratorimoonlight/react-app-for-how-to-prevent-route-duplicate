import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar() {
    return (
        <ul className="nav justify-content-end nav-tabs">
            <li className="nav-item">
                <NavLink to="/" exact className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
        </ul>
    )
}
