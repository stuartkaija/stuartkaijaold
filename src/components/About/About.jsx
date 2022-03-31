import React from 'react';
import './About.scss';

export default function About() {


    const dateMaker = () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const today = new Date()

        // write contingency code if this isn't returning properly

        return days[today.getDay()];
    }


    return (
        <div id='about'  className='about'>
            <p className='about__words'>Hello, and happy <span>{dateMaker()}</span>.</p>
            <p className='about__words'>I'm Stuart - recent web development bootcamp grad, former fire fighter. Interested in creating things (<a className='about__link' href='#projects'>websites</a>, music, <span className='home__words--span'>these could be hyperlinks ideally)</span>, seeing new places, blah blah blah blah blah.</p>
            <p className='about__words'>You can reach me <a className='about__link' href="mailto:stuartkaija@gmail.com?subject=mail%20from%20personal%20site" target='_blank' rel='noreferrer'>here</a>.</p>
        </div>
    )
}
