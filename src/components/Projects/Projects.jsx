import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Projects.scss';

export default function Projects({inView}) {

	// const { ref, inView, entry} = useInView({
	// 	threshold: 0.4
	// });

	// console.log("projects is in view? ", inView);



	return (
		<div id='projects' className='projects'>
			<h1>{`Projects in view? ${inView}`}</h1>
			{/* <ul className='projects__list'>
				<li className='projects__list-item'>
					<a className='projects__link' href="https://github.com/stuartkaija/bubble-buddies" target='_blank' rel='noreferrer'>Bubble Buddies</a>
					<p className='projects__words'>React, Sass, Node, Express - blah blah blah</p>
				</li>
				<li className='projects__list-item'>
					<a className='projects__link' href="">WhoopWork</a>
					<p className='projects__words'>Industry hack-a-thon - with a team of two designers and two developers, ideated and brought to life a new feature for wearable fitness brand Whoop.</p>
				</li>
				<li className='projects__list-item'>
					<a className='projects__link' href="https://github.com/stuartkaija/instock" target='_blank' rel='noreferrer'>InStock</a>
					<p className='projects__words'>A warehouse inventory application created with a team of 3 other developers. Successfully utilized agile methodologies, Jira, and GitHub version control to collaborate</p>
				</li>
			</ul> */}
		</div>
	)
}
