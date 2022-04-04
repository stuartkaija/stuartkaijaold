import React from 'react';
import { useInView } from 'react-intersection-observer';
import uniqid from 'uniqid';
import './Resume.scss';

export default function Resume({whosInView}) {

    const { ref, inView, entry} = useInView({
        threshold: 0.4
    });

    console.log("resume is in view? ", inView);

    if (inView) {
        whosInView("resume");
    }

    const skills = ['HTML', 'CSS/SCSS', 'JavaScript', 'React', 'Node', 'Express', 'Agile Development', 'Web APIs', 'Responsive Design', 'Web Accessibility']

    return (
        <div ref={ref} id='resume' className='resume'>
            <h1>{`NO I AM THE ONE WHO IS IN VIEW ${inView}`}</h1>
            <h1 className='resume__header'>Experience with:</h1>
            <ul>
                {skills.map((skill) => {
                    return <li key={uniqid()} className='resume__list-item'>{skill}</li>
                })}
            </ul>
        </div>
    )
}
