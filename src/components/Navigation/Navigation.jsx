import React, { useState, useEffect } from 'react';
import './Navigation.scss';

export default function Navigation({whosInView}) {

    const [activeNav, setActiveNav] = useState('');

    console.log("activeNav state: " + activeNav);

    const updateWhosInView = () => {
        setActiveNav(whosInView);
    }

    // component did mount
    useEffect(() => {
        console.log('should only happen once, on component did mount');
    }, []);

    // component did update
    useEffect(() => {
        updateWhosInView();
    }, [activeNav]);

    return (
        <nav className='navigation'>
            <button onClick={() => {setActiveNav(whosInView)}}>Click to update state...</button>
            <a className={activeNav === 'about' ? 'navigation__link navigation__link--active' : 'navigation__link'} href="#about">About</a>
            <a className={activeNav === 'projects' ? 'navigation__link navigation__link--active' : 'navigation__link'} href="#projects">Projects</a>
            
            <a className={activeNav === 'resume' ? 'navigation__link navigation__link--active' : 'navigation__link'} href="#resume">Resume</a>
        </nav>
    )
}
