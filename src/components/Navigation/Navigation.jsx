import React from 'react';
// import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Navigation.scss';

export default function Navigation() {
    return (
        <nav className='navigation'>
            <a className='navigation__link' href="#about">About</a>
            
            <a className='navigation__link' href="#projects">Projects</a>
            
            <a className='navigation__link' href="#resume">Resume</a>
            {/* <NavLink className={({ isActive }) => (isActive ? 'navigation__link--active' : 'navigation__link')}  to='/about'>About</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'navigation__link--active' : 'navigation__link')} to='/projects'>Projects</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'navigation__link--active' : 'navigation__link')} to='/resume'>Resume</NavLink> */}
            {/* <div className='test'>
                <Footer />
            </div> */}
            {/* <a className='navigation__link' href="">Resume</a> this will be a link to download or show my resume... */}
        </nav>
    )
}
