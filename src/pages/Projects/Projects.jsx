import React from 'react';
import { NavLink } from 'react-router-dom';
import BubbleBuddies from '../../assets/photos/projects/bubble_buddies.png';
import WhoopWork from '../../assets/photos/projects/whoop_work.png';
import InStock from '../../assets/photos/projects/InStock.png';
import './Projects.scss';

export default function Projects() {
    return (
        <div className='projects'>

            {/* <div className='projects__image-container'> */}
                <img className='projects__image' src={BubbleBuddies} alt="Bubble Buddies" />
            {/* </div> */}

            {/* <div className='projects__image-container'> */}
                <img className='projects__image'  src={WhoopWork} alt="WhoopWork" />
            {/* </div> */}

            {/* <div className='projects__image-container'> */}
                <img className='projects__image'  src={InStock} alt="InStock" />
            {/* </div> */}

        </div>
    )
}
