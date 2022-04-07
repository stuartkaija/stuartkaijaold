import React from 'react';
import './About.scss';

export default function About() {

    const dateMaker = () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();

        // write contingency code if this isn't returning properly

        return days[today.getDay()];
    };

    return (
        <div id='about'  className='about'>
            <h1>Hello, and happy <span>{dateMaker()}</span>.</h1>
            <p className='about__words'>I'm Stuart - a web developer with a passion for creating applications that work for and improve the human experience.</p>
            <p className='about__words'>You can reach me at <a className='about__link' href="mailto:stuartkaija@gmail.com?subject=mail%20from%20personal%20site" target='_blank' rel='noreferrer'>stuartkaija@gmail.com</a>.</p>
        </div>
    );
};
