import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomePage.scss';

export default function HomePage() {

    const dateMaker = () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const today = new Date()

        // write contingency code if this isn't returning properly

        return days[today.getDay()];
    }

    return (
        <div className='home'>
            <p className='home__words'>Hello, and happy <span>{dateMaker()}</span>.</p>
            <p className='home__words'>I'm Stuart - recent web development bootcamp grad, former fire fighter. Interested in creating things (<NavLink to='/projects'>websites</NavLink>, music, <span className='home__words--span'>these could be hyperlinks ideally)</span>, seeing new places, blah blah blah blah blah.</p>
            <p className='home__words'>You can reach me <a href="mailto:stuartkaija@gmail.com?subject=mail%20from%20personal%20site">here</a>.</p>
        </div>
    )
}
