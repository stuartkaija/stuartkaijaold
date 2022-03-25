import React from 'react';
import { NavLink } from 'react-router-dom';
import BubbleBuddies from '../../assets/photos/projects/bubble_buddies.png';
import WhoopWork from '../../assets/photos/projects/whoop_work.png';
import InStock from '../../assets/photos/projects/InStock.png';
import './Projects.scss';

export default function Projects() {
    // return (
    //     <div className='projects'>

    //         {/* <div className='projects__image-container'> */}
    //             <img className='projects__image' src={BubbleBuddies} alt="Bubble Buddies" />
    //         {/* </div> */}

    //         {/* <div className='projects__image-container'> */}
    //             <img className='projects__image'  src={WhoopWork} alt="WhoopWork" />
    //         {/* </div> */}

    //         {/* <div className='projects__image-container'> */}
    //             <img className='projects__image'  src={InStock} alt="InStock" />
    //         {/* </div> */}

    //     </div>
    // )

    return (
      <div className='projects'>
        <h1>Projects</h1>
        <ul className='projects__list'>
          <li className='projects__list-item'>
            <a className='projects__link' href="">Bubble Buddies</a>
          </li>
          <li className='projects__list-item'>
            <a className='projects__link' href="">WhoopWork</a>
          </li>
          <li className='projects__list-item'>
            <a className='projects__link' href="">InStock</a>
          </li>
        </ul>
      </div>
    )
}
