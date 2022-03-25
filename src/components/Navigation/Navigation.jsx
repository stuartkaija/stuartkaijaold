import React from 'react';
import './Navigation.scss';

export default function Navigation() {
    return (
        <nav className='navigation'>
            <a className='navigation__link' href="#about">About</a>
            
            <a className='navigation__link' href="#projects">Projects</a>
            
            <a className='navigation__link' href="#resume">Resume</a>
        </nav>
    )
}
