import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <NavLink to='/'>About</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            Resume {/* this will be a link to download or show my resume... */}
        </nav>
    )
}
