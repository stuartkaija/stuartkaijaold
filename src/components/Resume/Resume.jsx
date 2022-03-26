import React from 'react';
import './Resume.scss';

export default function Resume() {

    const skills = ['HTML', 'CSS/SCSS', 'JavaScript', 'React', 'Node', 'Express', 'Agile Development', 'Web APIs', 'Responsive Design', 'Web Accessibility']

    return (
        <div id='resume' className='resume'>
            <h1 className='resume__header'>Experience with:</h1>
            <ul>
                {skills.map((skill) => {
                    return (
                        <li className='resume__list-item'>{skill}</li>
                    )
                })}
            </ul>
        </div>
    )
}
