import React, { useState, useEffect } from 'react';
import './Navigation.scss';

export default function Navigation({whosInView}) {

    const [activeNav, setActiveNav] = useState('');

    const updateWhosInView = (who) => {
        setActiveNav(who);
    };

    useEffect(() => {
        updateWhosInView(whosInView);
    }, [whosInView]);

    return (
        <nav className='navigation'>
            <a className={activeNav === 'about' ? 'navigation__link navigation__link--active' : 'navigation__link'} href="#about">About</a>
            <a className={activeNav === 'projects' ? 'navigation__link navigation__link--active' : 'navigation__link'} href="#projects">Projects</a>
            <a className={activeNav === 'resume' ? 'navigation__link navigation__link--active' : 'navigation__link'} href="#resume">Resume</a>
        </nav>
    );
};
