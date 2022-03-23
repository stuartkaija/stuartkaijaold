import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
    return (
        <nav className='navigation'>
            <NavLink className={({ isActive }) => (isActive ? 'navigation__link--active' : 'navigation__link')}  to='/about'>About</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'navigation__link--active' : 'navigation__link')} to='/projects'>Projects</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'navigation__link--active' : 'navigation__link')} to='/resume'>Resume</NavLink>

            {/* <a className='navigation__link' href="">Resume</a> this will be a link to download or show my resume... */}
        </nav>
    )
}
