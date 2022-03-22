import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
    return (
        <nav className='navigation'>
            <NavLink className='navigation__link' to='/'>About</NavLink>
            <NavLink className='navigation__link' to='/projects'>Projects</NavLink>
            <a className='navigation__link' href="">Resume</a> {/* this will be a link to download or show my resume... */}
        </nav>
    )
}
